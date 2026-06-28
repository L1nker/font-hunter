/**
 * app.js — Inicialização da aplicação Font Hunter
 *
 * Responsabilidade: inicializar o tema, configurações globais
 * e preparar a estrutura para os módulos futuros.
 *
 * Esta é a Fase 1: apenas estrutura base.
 * Nenhuma lógica de upload, OCR ou APIs é implementada aqui.
 */

const FontHunter = (() => {

  // -------------------------------------------------------------------------
  // Constantes internas
  // -------------------------------------------------------------------------

  const THEME_KEY    = 'fonthunter-theme';
  const THEME_LIGHT  = 'light';
  const THEME_DARK   = 'dark';

  // -------------------------------------------------------------------------
  // Estado da aplicação (será expandido nas fases seguintes)
  // -------------------------------------------------------------------------

  const state = {
    theme: THEME_LIGHT,
    initialized: false,
  };

  // -------------------------------------------------------------------------
  // Tema — claro / escuro
  // (DESIGN.md: "Toda funcionalidade disponível no tema claro deverá
  //  funcionar igualmente no tema escuro")
  // -------------------------------------------------------------------------

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || null;
    } catch {
      // localStorage pode estar indisponível (modo privado restrito)
      return null;
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    return THEME_LIGHT;
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignora erros de storage silenciosamente
    }
  }

  function toggleTheme() {
    const next = state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(next);
  }

  function initTheme() {
    const stored = getStoredTheme();
    const theme  = stored || getSystemTheme();
    applyTheme(theme);

    // Escuta mudanças na preferência do sistema operacional
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Só respeita a mudança do sistema se o usuário não escolheu manualmente
      if (!getStoredTheme()) {
        applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
      }
    });
  }

  // -------------------------------------------------------------------------
  // Acessibilidade — anuncia mudanças para leitores de tela
  // -------------------------------------------------------------------------

  function announceToScreenReader(message) {
    const live = document.getElementById('sr-announcer');
    if (live) {
      live.textContent = '';
      // Pequeno delay garante que leitores de tela percebam a mudança
      requestAnimationFrame(() => {
        live.textContent = message;
      });
    }
  }

  // -------------------------------------------------------------------------
  // Bind de eventos da interface
  // -------------------------------------------------------------------------

  function bindThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      toggleTheme();
      const label = state.theme === THEME_DARK
        ? 'Tema escuro ativado'
        : 'Tema claro ativado';
      announceToScreenReader(label);
    });
  }

  // -------------------------------------------------------------------------
  // Inicialização
  // -------------------------------------------------------------------------

  function init() {
    if (state.initialized) return;

    initTheme();
    bindThemeToggle();

    state.initialized = true;

    console.info('[Font Hunter] Fase 1 — Estrutura base inicializada.');
    console.info('[Font Hunter] Tema atual:', state.theme);
  }

  // -------------------------------------------------------------------------
  // API pública (será expandida nas fases seguintes)
  // -------------------------------------------------------------------------

  return {
    init,
    toggleTheme,
    getTheme: () => state.theme,
  };

})();

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', FontHunter.init);
