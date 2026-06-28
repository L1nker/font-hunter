/**
 * upload.js — Lógica de upload de imagem
 *
 * Responsabilidade exclusiva:
 *   - abrir o seletor de arquivos
 *   - ler arquivos via File System, Drag & Drop e Clipboard (Ctrl+V)
 *   - validar o formato do arquivo (tipo MIME)
 *   - converter o arquivo em Data URL
 *   - notificar o HomeModule sobre o resultado via callback
 *
 * O que NÃO pertence a este módulo (fases futuras):
 *   - validação de tamanho máximo           → Fase 3.2
 *   - validação de resolução mínima         → Fase 3.2
 *   - crop e ajuste de contraste            → Fase 3.3
 *   - envio para OCR                        → Fase 4
 *   - envio para APIs de identificação      → Fase 5
 *
 * Dependências: nenhuma (vanilla JS puro).
 */

const UploadModule = (() => {

  // -------------------------------------------------------------------------
  // Configuração
  // -------------------------------------------------------------------------

  /** Tipos MIME aceitos. Validação de tamanho/resolução fica para Fase 3.2. */
  const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/webp'];

  // -------------------------------------------------------------------------
  // Estado interno
  // -------------------------------------------------------------------------

  let fileInput    = null;
  let onFileReady  = null;   // callback(dataUrl, fileName) — injetado por init()
  let onFileError  = null;   // callback(message)           — injetado por init()

  // -------------------------------------------------------------------------
  // Validação de formato
  // -------------------------------------------------------------------------

  function isAcceptedType(file) {
    return ACCEPTED_TYPES.includes(file.type);
  }

  function getExtensionError(file) {
    const ext = file.name.split('.').pop().toUpperCase() || 'desconhecido';
    return `Formato "${ext}" não é suportado. Use PNG, JPG, JPEG ou WEBP.`;
  }

  // -------------------------------------------------------------------------
  // Leitura do arquivo → Data URL
  // -------------------------------------------------------------------------

  function readFile(file) {
    if (!isAcceptedType(file)) {
      onFileError && onFileError(getExtensionError(file));
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      onFileReady && onFileReady(e.target.result, file.name);
    };

    reader.onerror = () => {
      onFileError && onFileError('Não foi possível ler o arquivo. Tente novamente.');
    };

    reader.readAsDataURL(file);
  }

  // -------------------------------------------------------------------------
  // Abrir seletor de arquivos (clique)
  // -------------------------------------------------------------------------

  function openFilePicker() {
    if (fileInput) fileInput.click();
  }

  // -------------------------------------------------------------------------
  // Handler: input[type=file] — seleção manual
  // -------------------------------------------------------------------------

  function onInputChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    readFile(file);

    // Limpa o valor para que o mesmo arquivo possa ser selecionado novamente
    e.target.value = '';
  }

  // -------------------------------------------------------------------------
  // Handler: drop — arquivo arrastado sobre a upload area
  // -------------------------------------------------------------------------

  function handleDrop(e) {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file) return;
    readFile(file);
  }

  // -------------------------------------------------------------------------
  // Handler: paste — Ctrl+V
  // -------------------------------------------------------------------------

  function handlePaste(e) {
    const items = e.clipboardData && e.clipboardData.items;
    if (!items) return;

    for (const item of items) {
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          readFile(file);
          return;
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // API pública
  // -------------------------------------------------------------------------

  /**
   * init({ fileInputId, onReady, onError })
   *
   * @param {string}   fileInputId  — ID do input[type=file] no HTML
   * @param {Function} onReady      — chamada com (dataUrl, fileName) ao carregar
   * @param {Function} onError      — chamada com (message) em caso de erro
   */
  function init({ fileInputId, onReady, onError }) {
    fileInput   = document.getElementById(fileInputId);
    onFileReady = onReady;
    onFileError = onError;

    if (!fileInput) {
      console.warn('[UploadModule] input#' + fileInputId + ' não encontrado.');
      return;
    }

    fileInput.addEventListener('change', onInputChange);

    console.info('[Font Hunter] Fase 3.1 — UploadModule inicializado.');
  }

  return {
    init,
    openFilePicker,
    handleDrop,
    handlePaste,
  };

})();
