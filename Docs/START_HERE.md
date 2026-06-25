# START_HERE.md

# Bem-vindo ao Font Hunter

Se você é um desenvolvedor ou uma Inteligência Artificial trabalhando neste projeto, **pare antes de escrever qualquer código.**

O Font Hunter possui documentação oficial que define toda a arquitetura, identidade visual e regras do projeto.

Leia os documentos na ordem indicada abaixo.

---

# Ordem de Leitura Obrigatória

## 1. PROJECT.md

Contém:

* visão do produto;
* missão;
* arquitetura;
* funcionalidades;
* experiência do usuário;
* decisões arquiteturais (ADR);
* especificação funcional.

Leia este documento primeiro.

---

## 2. DESIGN.md

Define toda a identidade visual do projeto.

Inclui:

* filosofia visual;
* linguagem visual;
* design tokens;
* sistema oficial de componentes.

Nenhum componente deverá ser criado sem consultar este documento.

---

## 3. DEVELOPMENT_RULES.md

Define as regras de desenvolvimento.

Inclui:

* responsabilidades da IA;
* organização do código;
* tecnologias oficiais;
* comunicação;
* boas práticas.

Toda implementação deverá seguir estas regras.

---

## 4. ROADMAP.md

Define a ordem oficial de desenvolvimento.

Nenhuma funcionalidade deverá ser implementada fora da fase atual.

---

## 5. API.md

Documenta todas as APIs utilizadas pelo projeto.

Inclui:

* integrações;
* autenticação;
* limites;
* estratégias de fallback;
* normalização dos dados.

---

# Tecnologias Oficiais

Frontend

* HTML5

* CSS3

* JavaScript (Vanilla)

Backend

* Supabase

Hospedagem

* GitHub

* Cloudflare Pages

Domínio

* Gratuito inicialmente

---

# Tecnologias Não Aprovadas

Enquanto não houver autorização explícita do Product Owner, NÃO utilizar:

* React
* Vue
* Angular
* Svelte
* Next.js
* Nuxt
* Bootstrap
* jQuery
* Tailwind CSS
* Electron

O objetivo do projeto é permanecer simples, leve e independente de frameworks.

> **Observação:** Esta lista não significa que essas tecnologias sejam ruins. Apenas não fazem parte da arquitetura definida para a versão atual do Font Hunter. Caso exista um motivo técnico relevante para utilizá-las no futuro, a mudança deverá ser discutida e aprovada antes de qualquer implementação.

---

# Estado Atual do Projeto

Fase:

Preparação do desenvolvimento.

Documentação:

Concluída.

Código:

Ainda não iniciado.

---

# Objetivo Atual

Construir a primeira versão funcional seguindo exatamente a documentação oficial.

---

# Antes de Implementar Qualquer Funcionalidade

Pergunte a si mesmo:

* Esta funcionalidade já está documentada?
* Ela respeita os ADRs?
* Ela segue o Design System?
* Ela mantém a arquitetura?
* Ela realmente melhora a experiência do usuário?

Se alguma resposta for negativa, interrompa a implementação e consulte o Product Owner.

---

# O que Nunca Deve Ser Alterado

Sem autorização explícita do Product Owner:

* arquitetura;
* identidade visual;
* fluxo do usuário;
* estrutura das pastas;
* tecnologias principais;
* documentação oficial.

---

# Princípio Fundamental

O Font Hunter não é apenas um identificador de fontes.

Ele é uma plataforma de descoberta tipográfica.

Toda decisão técnica deve contribuir para esse objetivo.

---

# Filosofia do Desenvolvimento

A prioridade do projeto é:

1. Experiência do usuário.

2. Clareza do código.

3. Performance.

4. Escalabilidade.

5. Facilidade de implementação.

Sempre que existir conflito entre facilidade de implementação e qualidade do produto, deverá prevalecer a qualidade do produto.

---

# Regra Final

Antes de escrever qualquer linha de código, certifique-se de compreender completamente a documentação oficial.

Nenhuma implementação deve ser baseada em suposições.

Em caso de dúvida, consulte o Product Owner antes de prosseguir.
