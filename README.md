# Font Hunter

**A melhor plataforma para descobrir fontes gratuitas na internet.**

Envie uma imagem com texto e descubra a fonte utilizada, onde encontrá-la gratuitamente e quais alternativas existem — sem cadastro, sem custo.

---

## Estado atual

| Item         | Status        |
|--------------|---------------|
| Documentação | ✅ Concluída  |
| Fase 0       | ✅ Concluída  |
| Fase 1       | ✅ Concluída  |
| Fase 2       | ✅ Concluída  |
| Fase 3+      | ⏳ Pendente   |

---

## Como executar localmente

Não é necessário instalar nada. O projeto usa apenas HTML, CSS e JavaScript puro.

**Opção 1 — Servidor local com Python (recomendado):**

```bash
cd font-hunter
python3 -m http.server 8080
```

**Opção 2 — Servidor local com Node.js:**

```bash
npx serve .
```

**Opção 3 — VS Code Live Server:**

- Instale a extensão **Live Server**
- Clique com o botão direito em `index.html`
- Selecione **Open with Live Server**

Acesse em: `http://localhost:8080`

> Abrir `index.html` diretamente via `file://` também funciona nas fases atuais,
> mas um servidor local será necessário a partir da Fase 4 (OCR com Tesseract.js).

---

## Estrutura do projeto

```
font-hunter/
│
├── src/
│   ├── css/
│   │   ├── variables.css   ← Design Tokens (cores, tipografia, espaçamento...)
│   │   ├── global.css      ← Reset, base tipográfica, componentes globais
│   │   ├── layout.css      ← Macrolayout e footer
│   │   ├── home.css        ← Estilos da página inicial
│   │   ├── components.css  ← (Fase 7+)
│   │   └── results.css     ← (Fase 7+)
│   │
│   ├── js/
│   │   ├── app.js          ← Inicialização e tema
│   │   ├── home.js         ← Estados visuais da upload area
│   │   ├── upload.js       ← (Fase 3)
│   │   ├── preview.js      ← (Fase 7+)
│   │   ├── filters.js      ← (Fase 7+)
│   │   ├── favorites.js    ← (Fase 8+)
│   │   └── history.js      ← (Fase 9+)
│   │
│   └── assets/
│       └── icons/          ← Ícones SVG (quando necessário)
│
├── docs/                   ← Documentação oficial
│   ├── PROJECT.md
│   ├── DESIGN.md
│   ├── DEVELOPMENT_RULES.md
│   ├── ROADMAP.md
│   └── API.md
│
├── pages/                  ← Páginas adicionais (Fase 7+)
│
├── index.html              ← Página principal
├── README.md               ← Este arquivo
└── PROJECT_STATUS.md       ← Status de desenvolvimento
```

---

## Tecnologias

| Camada      | Tecnologia              |
|-------------|-------------------------|
| Frontend    | HTML5, CSS3, JavaScript |
| Backend     | Supabase (Fase 12+)     |
| Hospedagem  | Cloudflare Pages        |
| OCR         | Tesseract.js (Fase 4)   |
| Fontes ID   | WhatFontIs API (Fase 5) |

Sem frameworks. Sem bibliotecas desnecessárias.

---

## Documentação

Toda a arquitetura, regras de desenvolvimento e decisões de produto estão em `docs/`.

Leia na seguinte ordem antes de contribuir:

1. `docs/PROJECT.md`
2. `docs/DESIGN.md`
3. `docs/DEVELOPMENT_RULES.md`
4. `docs/ROADMAP.md`
5. `docs/API.md`

---

## Licença

A definir.
