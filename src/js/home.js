/**
 * home.js — Estados visuais e orquestração da página inicial
 *
 * Responsabilidade:
 *   - gerenciar os estados CSS da upload area
 *     (default, hover, dragging, foco, has-image)
 *   - orquestrar o UploadModule (delegar leitura de arquivo)
 *   - exibir a imagem carregada na própria home
 *   - fornecer os botões "Trocar imagem" e "Remover imagem"
 *
 * O que NÃO pertence a este módulo:
 *   - leitura de arquivos          → upload.js
 *   - OCR                          → Fase 4
 *   - chamadas a APIs              → Fase 5+
 *   - navegação para resultados    → Fase 7
 */

const HomeModule = (() => {

  // -------------------------------------------------------------------------
  // Elementos do DOM
  // -------------------------------------------------------------------------
  let uploadArea     = null;
  let uploadBtn      = null;
  let imagePreview   = null;   // <img> que mostra a imagem carregada
  let previewPanel   = null;   // painel que substitui o placeholder
  let uploadContent  = null;   // conteúdo padrão (ícone, título, botão)
  let changeBtn      = null;   // botão "Trocar imagem"
  let removeBtn      = null;   // botão "Remover imagem"
  let uploadHint     = null;   // dica de Ctrl+V e privacidade
  let errorMessage   = null;   // <div> container do erro
  let errorText      = null;   // <span> com o texto do erro

  // -------------------------------------------------------------------------
  // Estado atual da upload area
  // -------------------------------------------------------------------------
  let currentImage = null;   // { dataUrl, fileName } | null

  // -------------------------------------------------------------------------
  // Gerenciamento de classes CSS (estados visuais)
  // -------------------------------------------------------------------------

  function setDragging(active) {
    uploadArea.classList.toggle('is-dragging', active);
  }

  function setImageLoaded(dataUrl, fileName) {
    currentImage = { dataUrl, fileName };

    // Atualiza a <img> com a imagem recebida
    imagePreview.src = dataUrl;
    imagePreview.alt = `Imagem carregada: ${fileName}`;

    // Exibe o nome do arquivo no rodapé do preview
    const filenameEl = document.getElementById('upload-filename');
    if (filenameEl) {
      filenameEl.textContent = fileName;
      filenameEl.title = fileName;
    }

    // Troca o estado visual da upload area
    uploadArea.classList.add('has-image');
    uploadArea.classList.remove('is-dragging', 'is-hover');

    // Desabilita o cursor de ponteiro (área não é mais clicável)
    uploadArea.style.cursor = 'default';

    // Remove role=button e tabindex enquanto exibe imagem
    uploadArea.removeAttribute('role');
    uploadArea.removeAttribute('tabindex');

    // Esconde a dica de Ctrl+V/privacidade enquanto há imagem
    if (uploadHint) uploadHint.hidden = true;

    clearError();

    console.info('[Font Hunter] Imagem carregada:', fileName);
  }

  function clearImage() {
    currentImage = null;

    imagePreview.src = '';
    imagePreview.alt = '';

    // Limpa nome do arquivo no rodapé
    const filenameEl = document.getElementById('upload-filename');
    if (filenameEl) {
      filenameEl.textContent = 'Imagem carregada';
      filenameEl.title = '';
    }

    uploadArea.classList.remove('has-image');
    uploadArea.style.cursor = '';

    // Restaura acessibilidade da área clicável
    uploadArea.setAttribute('role', 'button');
    uploadArea.setAttribute('tabindex', '0');

    if (uploadHint) uploadHint.hidden = false;

    clearError();
  }

  // -------------------------------------------------------------------------
  // Feedback de erro
  // -------------------------------------------------------------------------

  function showError(message) {
    if (!errorMessage) return;
    if (errorText) errorText.textContent = message;
    errorMessage.hidden = false;
  }

  function clearError() {
    if (!errorMessage) return;
    if (errorText) errorText.textContent = '';
    errorMessage.hidden = true;
  }

  // -------------------------------------------------------------------------
  // Drag — eventos na upload area
  // -------------------------------------------------------------------------

  function onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentImage) return;   // já tem imagem, ignora
    if (e.dataTransfer && e.dataTransfer.types.includes('Files')) {
      setDragging(true);
    }
  }

  function onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentImage) return;
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!uploadArea.contains(e.relatedTarget)) {
      setDragging(false);
    }
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (currentImage) return;   // já tem imagem, ignora novo drop

    // Delega a leitura real ao UploadModule
    UploadModule.handleDrop(e);
  }

  // -------------------------------------------------------------------------
  // Drag global — sinaliza quando arquivo entra na janela
  // -------------------------------------------------------------------------

  function onDocumentDragEnter(e) {
    if (currentImage) return;
    if (e.dataTransfer && e.dataTransfer.types.includes('Files')) {
      uploadArea.classList.add('is-hover');
    }
  }

  function onDocumentDragLeave(e) {
    if (e.clientX === 0 && e.clientY === 0) {
      uploadArea.classList.remove('is-hover');
      setDragging(false);
    }
  }

  function onDocumentDrop(e) {
    // Drop fora da upload area — cancela estados visuais
    if (!uploadArea.contains(e.target)) {
      uploadArea.classList.remove('is-hover');
      setDragging(false);
    }
  }

  // -------------------------------------------------------------------------
  // Clique — abre o file picker (só quando não há imagem)
  // -------------------------------------------------------------------------

  function onAreaClick(e) {
    // Se o clique foi nos botões internos, não abre o picker
    if (e.target.closest('[data-upload-action]')) return;
    if (currentImage) return;
    UploadModule.openFilePicker();
  }

  function onUploadBtnClick(e) {
    e.stopPropagation();
    UploadModule.openFilePicker();
  }

  // -------------------------------------------------------------------------
  // Teclado — acessibilidade na upload area
  // -------------------------------------------------------------------------

  function onAreaKeydown(e) {
    if (currentImage) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      UploadModule.openFilePicker();
    }
  }

  // -------------------------------------------------------------------------
  // Paste — Ctrl+V global
  // -------------------------------------------------------------------------

  function onDocumentPaste(e) {
    // Ignora paste dentro de campos de texto
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    UploadModule.handlePaste(e);
  }

  // -------------------------------------------------------------------------
  // Botões "Trocar" e "Remover"
  // -------------------------------------------------------------------------

  function onChangeBtnClick(e) {
    e.stopPropagation();
    // Limpa a imagem atual e abre o picker imediatamente
    clearImage();
    UploadModule.openFilePicker();
  }

  function onRemoveBtnClick(e) {
    e.stopPropagation();
    clearImage();
  }

  // -------------------------------------------------------------------------
  // Bind de todos os eventos
  // -------------------------------------------------------------------------

  function bindEvents() {
    // Upload area — drag
    uploadArea.addEventListener('dragenter', onDragEnter);
    uploadArea.addEventListener('dragover',  onDragOver);
    uploadArea.addEventListener('dragleave', onDragLeave);
    uploadArea.addEventListener('drop',      onDrop);

    // Drag global
    document.addEventListener('dragenter', onDocumentDragEnter);
    document.addEventListener('dragleave', onDocumentDragLeave);
    document.addEventListener('drop',      onDocumentDrop);

    // Clique na área
    uploadArea.addEventListener('click',   onAreaClick);
    uploadArea.addEventListener('keydown', onAreaKeydown);

    // Botão "Selecionar imagem"
    if (uploadBtn) uploadBtn.addEventListener('click', onUploadBtnClick);

    // Botões de ação pós-upload
    if (changeBtn) changeBtn.addEventListener('click', onChangeBtnClick);
    if (removeBtn) removeBtn.addEventListener('click', onRemoveBtnClick);

    // Ctrl+V global
    document.addEventListener('paste', onDocumentPaste);
  }

  // -------------------------------------------------------------------------
  // Inicializa o UploadModule e injeta os callbacks
  // -------------------------------------------------------------------------

  function initUpload() {
    UploadModule.init({
      fileInputId: 'file-input',

      // Sucesso: imagem lida com sucesso
      onReady: (dataUrl, fileName) => {
        setImageLoaded(dataUrl, fileName);
      },

      // Erro: formato inválido ou falha de leitura
      onError: (message) => {
        showError(message);
      },
    });
  }

  // -------------------------------------------------------------------------
  // Inicialização
  // -------------------------------------------------------------------------

  function init() {
    uploadArea    = document.getElementById('upload-area');
    uploadBtn     = document.getElementById('upload-btn');
    imagePreview  = document.getElementById('upload-preview-img');
    previewPanel  = document.getElementById('upload-preview-panel');
    changeBtn     = document.getElementById('upload-change-btn');
    removeBtn     = document.getElementById('upload-remove-btn');
    uploadHint    = document.getElementById('upload-hint');
    errorMessage  = document.getElementById('upload-error');
    errorText     = document.getElementById('upload-error-text');

    if (!uploadArea) return;

    initUpload();
    bindEvents();

    console.info('[Font Hunter] Fase 3.1 — HomeModule inicializado.');
  }

  // -------------------------------------------------------------------------
  // API pública
  // -------------------------------------------------------------------------

  return {
    init,
    getCurrentImage: () => currentImage,
  };

})();

document.addEventListener('DOMContentLoaded', HomeModule.init);
