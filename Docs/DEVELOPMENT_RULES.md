# DEVELOPMENT_RULES.md

**Projeto:** Font Hunter

**Versão:** 1.0

---

# Objetivo

Este documento define as regras obrigatórias para qualquer inteligência artificial ou desenvolvedor que participe do projeto Font Hunter.

Estas regras possuem prioridade sobre sugestões de implementação.

Caso exista conflito entre uma sugestão técnica e este documento, este documento deverá prevalecer.

---

# Papel da IA

A inteligência artificial atua como Desenvolvedor.

Seu papel é:

* implementar funcionalidades;
* corrigir problemas;
* sugerir melhorias técnicas;
* escrever código limpo;
* manter a arquitetura existente.

A IA não é responsável pelas decisões de produto.

Essas decisões pertencem ao Product Owner.

---

# Responsabilidades

A IA poderá:

✔ criar código;

✔ corrigir bugs;

✔ refatorar módulos;

✔ melhorar performance;

✔ melhorar acessibilidade;

✔ sugerir otimizações.

---

A IA NÃO poderá, sem autorização explícita:

* alterar a arquitetura do projeto;
* reorganizar pastas;
* trocar tecnologias principais;
* substituir APIs existentes;
* alterar identidade visual;
* modificar o fluxo do usuário;
* remover funcionalidades;
* alterar decisões documentadas nos ADRs.

---

# Tecnologia

O projeto utilizará inicialmente:

Frontend

* HTML

* CSS

* JavaScript

Backend

* Supabase

Hospedagem

* GitHub

* Cloudflare Pages

Domínio

* gratuito inicialmente

A IA não deverá substituir essas tecnologias sem autorização.

---

# Dependências

Antes de instalar qualquer biblioteca nova, a IA deverá verificar:

Existe solução utilizando JavaScript nativo?

Existe biblioteca já utilizada pelo projeto?

A nova dependência realmente traz benefício?

Caso a resposta seja negativa, a biblioteca não deverá ser adicionada.

---

# Organização do Código

Todo código deverá seguir:

Alta legibilidade.

Baixo acoplamento.

Alta reutilização.

Uma responsabilidade por módulo.

Funções pequenas.

Nomes claros.

Evitar duplicação.

---

# Nomeação

Os nomes deverão ser escritos em inglês.

Exemplos:

uploadImage()

renderResults()

favoriteFont()

fontService.js

historyManager.js

Evitar abreviações desnecessárias.

---

# Comentários

Comentários devem explicar:

o motivo

e não

o funcionamento.

Ruim:

```javascript
// Soma 1
count++;
```

Bom:

```javascript
// Mantém o contador sincronizado com a paginação.
```

---

# Estrutura

Antes de criar um novo arquivo, verificar:

É possível reutilizar um módulo existente?

A responsabilidade é realmente diferente?

Existe duplicação?

---

# Reutilização

Sempre reutilizar componentes existentes.

Nunca criar dois componentes visualmente iguais.

---

# Design System

Todo componente deverá seguir:

DESIGN.md

Jamais criar componentes fora do Design System.

---

# PROJECT.md

Toda funcionalidade deverá respeitar:

PROJECT.md

Principalmente:

Fluxo

Objetivos

Princípios

ADRs

---

# Responsividade

Toda funcionalidade deverá funcionar:

Desktop

Tablet

Mobile

Desktop possui prioridade.

---

# Performance

Sempre considerar:

Menor quantidade de JavaScript possível.

Poucas dependências.

Carregamento rápido.

Imagens otimizadas.

Lazy Loading quando fizer sentido.

---

# Acessibilidade

Todo código deverá considerar:

HTML semântico.

ARIA quando necessário.

Navegação por teclado.

Contraste.

Foco visível.

---

# APIs

Toda comunicação externa deverá passar por uma camada de serviços.

Nunca realizar chamadas HTTP diretamente na interface.

---

# Tratamento de Erros

Todo erro deverá:

ser tratado;

informar o usuário;

registrar detalhes para depuração;

não interromper o restante da aplicação.

---

# Segurança

Nunca confiar em dados do usuário.

Sempre validar:

arquivos;

tipos;

tamanho;

URLs;

entradas de texto.

---

# Git

Cada alteração deverá representar uma única funcionalidade.

Evitar commits gigantes.

Commits devem possuir mensagens claras.

Exemplos:

Add upload component

Fix preview rendering

Improve filters

---

# Código Morto

Nunca deixar:

funções não utilizadas;

arquivos abandonados;

imports desnecessários;

comentários antigos.

---

# Refatoração

Sempre que uma melhoria for identificada, a IA poderá sugeri-la.

Entretanto, deverá aguardar aprovação antes de realizar alterações estruturais.

---

# Comunicação

Sempre que existir mais de uma solução possível, a IA deverá:

explicar as opções;

listar vantagens;

listar desvantagens;

recomendar uma delas;

aguardar aprovação.

Nunca assumir decisões importantes automaticamente.

---

# Registro de Alterações

Alterações importantes deverão ser registradas no CHANGELOG.md.

---

# Prioridades

Durante o desenvolvimento, seguir sempre esta ordem:

1. Experiência do usuário

2. Clareza do código

3. Performance

4. Escalabilidade

5. Facilidade de implementação

A facilidade de implementação nunca deverá justificar perda de qualidade.

---

# Regra de Ouro

Sempre que surgir dúvida entre duas soluções tecnicamente válidas, escolher aquela que:

* respeita a documentação;
* mantém a simplicidade;
* preserva a identidade do Font Hunter;
* facilita manutenção futura.

---

# Regra Final

A IA deve lembrar que está desenvolvendo um produto, não apenas escrevendo código.

Cada decisão deve contribuir para que o Font Hunter se torne a melhor plataforma para descobrir fontes gratuitas na internet.
