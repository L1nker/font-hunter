# PROJECT_STATUS.md

**Projeto:** Font Hunter
**Versão:** 1.0 (Em desenvolvimento)
**Última atualização:** Junho de 2026

---

## Estrutura oficial do projeto

```
font-hunter/
├── src/
│   ├── css/
│   │   ├── variables.css   ← Design Tokens
│   │   ├── global.css      ← Reset + componentes base
│   │   ├── layout.css      ← Macrolayout + footer
│   │   ├── home.css        ← Estilos da página inicial
│   │   ├── components.css  ← (Fase 7+)
│   │   └── results.css     ← (Fase 7+)
│   ├── js/
│   │   ├── app.js          ← Inicialização + tema
│   │   ├── home.js         ← Estados visuais da upload area
│   │   ├── upload.js       ← (Fase 3)
│   │   ├── preview.js      ← (Fase 7+)
│   │   ├── filters.js      ← (Fase 7+)
│   │   ├── favorites.js    ← (Fase 8+)
│   │   └── history.js      ← (Fase 9+)
│   └── assets/
│       └── icons/
├── docs/
├── pages/
├── index.html
├── README.md
└── PROJECT_STATUS.md
```

CSS e JS ficam em `src/css/` e `src/js/`. O `index.html` carrega os arquivos
com os caminhos `src/css/` e `src/js/`.

---

## Status Geral

| Fase | Nome                       | Status          | Conclusão  |
|------|----------------------------|-----------------|------------|
| 0    | Preparação do Ambiente     | ✅ Concluída    | Junho 2026 |
| 1    | Estrutura da Aplicação     | ✅ Concluída    | Junho 2026 |
| 2    | Página Inicial             | ✅ Concluída    | Junho 2026 |
| 3    | Upload e Pré-processamento | 🔄 Em andamento | Junho 2026 |
| 4    | OCR                        | ⏳ Pendente     | —          |
| 5    | Identificação Tipográfica  | ⏳ Pendente     | —          |
| 6    | Bibliotecas                | ⏳ Pendente     | —          |
| 7    | Página de Resultados       | ⏳ Pendente     | —          |
| 8    | Sistema de Favoritos       | ⏳ Pendente     | —          |
| 9    | Histórico                  | ⏳ Pendente     | —          |
| 10   | Configurações              | ⏳ Pendente     | —          |
| 11   | Otimização                 | ⏳ Pendente     | —          |
| 12   | Deploy                     | ⏳ Pendente     | —          |
| 13   | Beta Público               | ⏳ Pendente     | —          |
| 14   | Font Hunter 1.0            | ⏳ Pendente     | —          |

---

## Fase 1 — Estrutura da Aplicação ✅

### Arquivos criados

- `index.html`
- `src/css/variables.css` — Design Tokens completos
- `src/css/global.css` — Reset, base tipográfica, componentes reutilizáveis
- `src/css/layout.css` — Macrolayout e footer
- `src/js/app.js` — Inicialização, tema, acessibilidade
- `README.md`, `PROJECT_STATUS.md`

### Funcionalidades entregues

- ✅ Design Tokens (modo claro + escuro)
- ✅ Toggle de tema com persistência em localStorage
- ✅ Respeito a `prefers-color-scheme`
- ✅ Anti-FOUC no carregamento
- ✅ Componentes base: btn, badge, divider
- ✅ Header sticky com logo, nav e toggle
- ✅ Layout responsivo (Desktop, Tablet, Mobile)
- ✅ Acessibilidade: ARIA, foco visível, SR announcer

---

## Fase 2 — Página Inicial ✅

### Arquivos criados / alterados

- `index.html` — logo SVG oficial, upload area com todos os estados, textos definitivos
- `src/css/home.css` — **novo**: estilos visuais da home (hero, upload area, features strip)
- `src/css/layout.css` — reorganizado: estilos da home movidos para `home.css`
- `src/js/home.js` — **novo**: gerenciamento dos estados visuais da upload area

### Funcionalidades entregues

- ✅ Logo oficial (SVG com ícone de lupa + letra F, gradiente azul→roxo)
- ✅ Hero section com título, subtítulo e eyebrow definitivos
- ✅ Upload area — estado **vazio** (padrão)
- ✅ Upload area — estado **hover** (mouse sobre a área)
- ✅ Upload area — estado **foco** (navegação por teclado)
- ✅ Upload area — estado **dragging** (arquivo sendo arrastado)
- ✅ Overlay "Solte para analisar" durante drag
- ✅ Badges de formatos aceitos (PNG, JPG, JPEG, WEBP)
- ✅ Hint de Ctrl+V e privacidade
- ✅ Features strip com ícones e textos definitivos
- ✅ Responsividade Desktop / Tablet / Mobile
- ✅ Acessibilidade: role, tabindex, aria-label, aria-describedby

### O que NÃO foi implementado (intencionalmente — Fase 3)

- ✗ Leitura real do arquivo (FileReader, input[type=file])
- ✗ Validação de formato e tamanho
- ✗ Preview da imagem selecionada
- ✗ Envio para OCR

### Critério de conclusão verificado

- ✅ Layout visual definitivo da home
- ✅ Logo implementado
- ✅ Todos os estados visuais da upload area funcionando
- ✅ Textos conforme documentação
- ✅ Responsivo em Desktop e Mobile
- ✅ Upload real reservado para Fase 3

---

## Fase 3 — Upload e Pré-processamento 🔄 Em andamento

### Fase 3.1 — Seleção de imagem ✅

#### Arquivos criados / alterados

- `src/js/upload.js` — **novo**: toda a lógica de leitura de arquivo (File System, Drag & Drop, Clipboard)
- `src/js/home.js` — atualizado: orquestra o `UploadModule`, gerencia o estado `has-image`, exibe a imagem
- `src/css/home.css` — atualizado: estilos do estado `has-image`, painel de preview, mensagem de erro
- `index.html` — atualizado: `input[type=file]` oculto, painel de preview, botões Trocar/Remover, div de erro

#### Funcionalidades entregues

- ✅ `input[type=file]` oculto, acionado programaticamente
- ✅ Clique na upload area abre o seletor de arquivos
- ✅ Drag & Drop funcional com leitura real do arquivo
- ✅ Ctrl+V funcional (leitura do clipboard)
- ✅ Leitura do arquivo com `FileReader` → Data URL
- ✅ Validação de tipo MIME (PNG, JPG, JPEG, WEBP)
- ✅ Mensagem de erro clara para formatos não suportados
- ✅ Imagem exibida na própria home (estado `has-image`)
- ✅ Nome do arquivo exibido no rodapé do preview
- ✅ Botão "Trocar imagem" (limpa + abre picker)
- ✅ Botão "Remover imagem" (limpa sem abrir picker)
- ✅ Dica de Ctrl+V ocultada quando há imagem carregada
- ✅ Acessibilidade: role/tabindex removidos da área quando has-image, restaurados ao limpar
- ✅ role=alert no container de erro (lido imediatamente por leitores de tela)
- ✅ Modularidade: `upload.js` isolado, `home.js` apenas orquestra e gerencia estados

#### O que NÃO foi implementado (intencionalmente)

- ✗ Validação de tamanho máximo       → Fase 3.2
- ✗ Validação de resolução mínima     → Fase 3.2
- ✗ Crop da imagem                    → Fase 3.3
- ✗ Ajuste de contraste               → Fase 3.3
- ✗ Envio para OCR                    → Fase 4
- ✗ Navegação para resultados         → Fase 7

#### Critério de conclusão verificado

- ✅ Usuário consegue selecionar imagem por clique, drag ou Ctrl+V
- ✅ Imagem aparece na home substituindo o placeholder
- ✅ Botões Trocar e Remover funcionam corretamente
- ✅ Formato inválido exibe mensagem de erro orientativa
- ✅ Código modular: lógica de upload isolada em `upload.js`
- ✅ `home.js` continua responsável apenas por estados visuais e orquestração
- ✅ Funciona em Desktop, Tablet e Mobile

---

## Próxima Fase: 3.2 — Validação avançada

### O que será implementado

- Validação de tamanho máximo (ex: 10 MB)
- Validação de resolução mínima
- Mensagens de erro específicas para cada caso
- Orientação ao usuário em cada cenário de erro

---

## Decisões Registradas (ADR)

### ADR-01 — Tema via data-theme no elemento raiz

**Decisão:** Script inline no `<head>` aplica o tema antes do render.
**Motivo:** Evita FOUC (flash de tema incorreto).

### ADR-02 — CSS separado por responsabilidade

**Decisão:** `variables` / `global` / `layout` / `home` / `results` / etc.
**Motivo:** Alinhado com PROJECT.md. Escala ao longo das 14 fases sem criar um CSS gigante.

### ADR-03 — JavaScript com IIFE

**Decisão:** Cada módulo JS usa IIFE para encapsular estado.
**Motivo:** Sem bundler, sem ES6 modules. Funciona via `file://` e servidor HTTP.

### ADR-04 — Estados visuais separados da lógica de upload

**Decisão:** `home.js` gerencia apenas classes CSS. A leitura real do arquivo fica em `upload.js` (Fase 3).
**Motivo:** Separação de responsabilidades. Permite testar os estados visuais sem dependência de arquivo real.

### ADR-05 — Logo em SVG inline no HTML

**Decisão:** Logo definido como SVG direto no HTML, sem arquivo externo.
**Motivo:** Zero requisição adicional. Herda CSS do documento. Fácil de manter.

### ADR-06 — Pasta src/ como raiz dos arquivos-fonte

**Decisão:** CSS, JS e assets ficam em `src/css/`, `src/js/` e `src/assets/`.
**Motivo:** Separação clara entre arquivos-fonte e arquivos de configuração/documentação da raiz.

---

### ADR-07 — O Font Hunter passa a ser oficialmente uma plataforma de descoberta de fontes

**Data:** Junho de 2026

**Contexto:**

O Font Hunter foi concebido como um identificador de fontes por imagem. Com o crescimento da visão do produto, ficou claro que a plataforma pode oferecer valor significativo mesmo para usuários que não possuem uma imagem para analisar — por exemplo, designers em busca de inspiração tipográfica, novidades do Google Fonts ou fontes recomendadas pela curadoria da plataforma.

**Decisão:**

O Font Hunter passa a possuir oficialmente duas frentes de valor:

1. **Identificação** — o usuário envia uma imagem e descobre qual fonte foi utilizada.
2. **Font Discovery** — o usuário explora fontes gratuitas diretamente na home, sem necessidade de enviar uma imagem.

A página inicial passará a conter, além da área de upload, uma seção de descoberta de fontes com curadoria manual e automática.

**O que muda:**

- A home deixa de ser exclusivamente uma tela de upload.
- A home passa a ser também um ponto de entrada para a descoberta tipográfica.
- Novas integrações de curadoria serão documentadas em `API.md`.
- O ROADMAP permanece inalterado. A implementação será discutida com o Product Owner antes de ser encaixada em uma fase.

**O que não muda:**

- A identificação por imagem continua sendo o fluxo principal.
- Nenhuma funcionalidade existente é removida ou alterada.
- Os princípios de gratuidade, privacidade e simplicidade permanecem.
- A arquitetura de camadas (interface → lógica → serviços) permanece.

**Justificativa:**

Alinhado com o ADR-014 do PROJECT.md, que já estabelece que o Font Hunter é uma plataforma de descoberta tipográfica e que a identificação é apenas uma etapa desse processo. Esta decisão formaliza e expande essa visão para o produto.

**Consequências:**

- `PROJECT.md` recebe uma nova seção: "Font Discovery".
- `API.md` recebe documentação das integrações futuras de curadoria.
- Nenhum arquivo de código é alterado neste momento.
