# PROJECT.md

**Projeto:** Font Hunter

**Versão:** 1.0 (Em desenvolvimento)

**Status:** Planejamento

**Última atualização:** Junho de 2026

---

# Objetivo deste documento

Este documento define a identidade, os objetivos, os princípios e a arquitetura do projeto **Font Hunter**.

Ele é a principal referência para qualquer desenvolvedor ou inteligência artificial que participe do desenvolvimento do projeto.

Em caso de conflito entre o código e esta documentação, este documento deve ser considerado a fonte oficial da verdade.

---

# Visão do Produto

## O que é o Font Hunter?

O **Font Hunter** é uma plataforma web especializada em descoberta tipográfica.

Seu objetivo é permitir que qualquer usuário envie uma imagem contendo texto e descubra:

* qual fonte foi utilizada;
* se essa fonte é gratuita ou comercial;
* onde ela pode ser obtida legalmente;
* quais alternativas gratuitas existem;
* quais bibliotecas oferecem essa fonte;
* todas as informações relevantes para utilização da fonte.

O Font Hunter foi criado para eliminar a necessidade de pesquisar em diversos sites diferentes, reunindo em um único ambiente informações provenientes de múltiplas bibliotecas tipográficas.

O projeto prioriza fontes gratuitas, mas também informa quando uma fonte é comercial, apresentando alternativas livres sempre que possível.

---

# Missão

Ser o melhor lugar da internet para descobrir fontes gratuitas.

O Font Hunter deve permitir que qualquer designer encontre rapidamente a melhor alternativa possível para uma fonte presente em uma imagem, reduzindo tempo de pesquisa e centralizando informações confiáveis.

---

# Filosofia

O projeto foi concebido seguindo alguns princípios fundamentais.

A identificação da fonte é apenas o primeiro passo.

O verdadeiro objetivo é oferecer ao usuário todas as informações necessárias para utilizar aquela tipografia de maneira legal, rápida e gratuita sempre que possível.

O Font Hunter não pretende competir apenas como um identificador de fontes.

Ele pretende se tornar uma plataforma de consulta tipográfica.

---

# Público-Alvo

O Font Hunter foi desenvolvido para:

* Designers gráficos;
* Social Media;
* Criadores de conteúdo;
* Agências;
* Desenvolvedores Front-end;
* Editoras;
* Igrejas;
* Editoras de vídeo;
* Entusiastas da tipografia;
* Qualquer usuário que precise identificar uma fonte.

O sistema deve ser suficientemente simples para usuários iniciantes e suficientemente completo para profissionais.

---

# Diferenciais

O Font Hunter possui alguns diferenciais fundamentais.

## Priorização de fontes gratuitas

Ao contrário da maioria das ferramentas existentes, o Font Hunter prioriza fontes gratuitas.

Sempre que uma fonte comercial for identificada, o sistema deverá procurar alternativas gratuitas visualmente semelhantes.

---

## Agregador de bibliotecas

O Font Hunter não pertence a uma única biblioteca.

Ele reúne informações provenientes de diferentes fontes, como por exemplo:

* Google Fonts
* Fontshare
* Bunny Fonts
* Open Foundry
* Font Squirrel

Novas bibliotecas poderão ser adicionadas futuramente sem alterar a experiência do usuário.

---

## Centralização de informações

Cada resultado deve apresentar, sempre que disponível:

* Nome da fonte
* Similaridade
* Categoria
* Subcategoria
* Licença
* Autor
* Ano de criação
* Biblioteca de origem
* Link oficial
* Link para download
* Idiomas suportados
* Caracteres suportados

---

## Comparação visual

O usuário poderá comparar a imagem original com qualquer fonte encontrada.

O texto utilizado no preview poderá ser alterado livremente.

Todas as amostras serão atualizadas em tempo real.

---

## Descoberta além da identificação

O objetivo não é apenas responder:

> "Qual é essa fonte?"

Mas também responder:

> "Quais são as melhores alternativas gratuitas?"

---

## Font Discovery

O Font Hunter vai além da identificação por imagem.

A página inicial também serve como ponto de entrada para a descoberta de fontes gratuitas, mesmo para usuários que não possuem uma imagem para analisar.

### O que é o Font Discovery?

Font Discovery é a área da home dedicada à exploração tipográfica espontânea.

Ela permite que o usuário descubra fontes interessantes sem nenhum objetivo específico, da mesma forma que se navega por uma curadoria visual.

### Funcionalidades previstas

**Recomendações da Semana**

Curadoria manual realizada pela equipe do Font Hunter.

Fontes selecionadas com base em qualidade, versatilidade e relevância atual.

Atualizadas periodicamente.

---

**Novidades do Google Fonts**

Lista automática das fontes adicionadas mais recentemente ao catálogo do Google Fonts.

Atualizada via integração com a API oficial.

---

**Fontes Populares**

Ranking das fontes mais acessadas ou favoritadas pelos usuários da plataforma.

Dados baseados em estatísticas de uso (sem identificação pessoal).

---

**Fonte Aleatória**

Um botão que apresenta uma fonte gratuita aleatória ao usuário.

Útil para inspiração tipográfica sem intenção prévia.

---

### Princípios do Font Discovery

Toda fonte exibida nessa área deverá:

* ser gratuita;
* possuir licença clara;
* estar disponível em pelo menos uma das bibliotecas integradas;
* seguir o modelo interno de dados do projeto.

O Font Discovery não é uma área de propaganda.

Nenhuma fonte poderá aparecer em destaque por razões comerciais.

---

### Relação com a arquitetura existente

O Font Discovery utiliza a mesma camada de serviços já definida para as demais integrações.

Nenhuma chamada HTTP será feita diretamente na interface.

Toda curadoria e dados externos passarão pela camada de serviços antes de chegar à interface.

---

# O que o Font Hunter NÃO é

O Font Hunter não é:

* um editor de imagens;
* um editor de fontes;
* um marketplace de fontes;
* uma loja de fontes;
* uma rede social;
* um serviço de assinatura;
* um software de design gráfico;
* um software de criação tipográfica.

Seu foco é exclusivamente descoberta, identificação e comparação de fontes.

---

# Princípios Fundamentais

Todas as decisões do projeto deverão respeitar estes princípios.

## Gratuidade

O uso básico do sistema sempre será gratuito.

---

## Simplicidade

A ferramenta deve exigir o menor número possível de ações do usuário.

---

## Transparência

Sempre que possível o usuário deve saber:

* de onde veio a informação;
* qual biblioteca forneceu a fonte;
* qual licença aquela fonte possui.

---

## Privacidade

O usuário não deve precisar criar uma conta para utilizar os recursos principais.

---

## Independência

O Font Hunter nunca deverá depender exclusivamente de uma única API, biblioteca ou fornecedor.

Sempre que possível deverão existir alternativas para garantir a continuidade do projeto.

---

## Evolução contínua

Novas bibliotecas poderão ser adicionadas sem necessidade de alterar a arquitetura principal do sistema.

---

# Regras Permanentes do Projeto

O Font Hunter NUNCA deve:

* cobrar pelo uso básico;
* exigir login para identificar fontes;
* esconder downloads gratuitos;
* utilizar publicidade invasiva;
* depender exclusivamente de uma única API;
* comprometer a privacidade do usuário;
* dificultar o acesso às alternativas gratuitas.

Essas regras possuem prioridade sobre qualquer funcionalidade futura.

# Capítulo 2 — Arquitetura do Sistema

---

# Objetivo da Arquitetura

A arquitetura do Font Hunter deve ser simples, organizada e facilmente expansível.

O projeto foi concebido para crescer ao longo dos anos sem necessidade de grandes reescritas.

Sempre que uma nova funcionalidade for adicionada, ela deverá ser integrada à estrutura existente, evitando duplicação de código e dependência excessiva entre módulos.

A simplicidade arquitetural tem prioridade sobre soluções excessivamente sofisticadas.

---

# Filosofia da Arquitetura

O Font Hunter segue alguns princípios fundamentais.

## Separação de responsabilidades

Cada arquivo deve possuir apenas uma responsabilidade.

Exemplos:

* upload de imagens
* comunicação com APIs
* renderização dos resultados
* gerenciamento de favoritos
* histórico
* filtros

Jamais um único arquivo deverá executar diversas funções diferentes.

---

## Baixo acoplamento

Os módulos devem depender o mínimo possível uns dos outros.

Uma alteração no sistema de upload, por exemplo, não deve exigir alterações no sistema de favoritos.

---

## Alta reutilização

Sempre que possível, componentes deverão ser reutilizados.

Evitar duplicação de código é um objetivo permanente.

---

## Modularidade

Novas funcionalidades devem poder ser adicionadas sem alterar o restante do projeto.

Exemplo:

Adicionar suporte à biblioteca "Adobe Fonts" não deverá exigir modificações em componentes já existentes.

---

# Estrutura Geral

O sistema será dividido em quatro camadas principais.

```text
Usuário

↓

Interface (HTML/CSS)

↓

Lógica (JavaScript)

↓

Serviços (APIs externas)

↓

Resultados
```

Cada camada possui responsabilidades específicas.

---

# Camada de Interface

Responsável por toda interação com o usuário.

Inclui:

* páginas
* botões
* menus
* formulários
* preview
* filtros
* animações
* responsividade

Esta camada nunca deverá conter regras de negócio complexas.

---

# Camada de Lógica

Responsável por:

* validações
* processamento das imagens
* gerenciamento do estado
* atualização dos componentes
* paginação
* favoritos
* histórico
* comunicação entre módulos

Toda regra do sistema deverá existir aqui.

---

# Camada de Serviços

Responsável exclusivamente pela comunicação com serviços externos.

Exemplos:

* APIs de identificação de fontes
* APIs das bibliotecas de fontes
* APIs de OCR
* APIs futuras

Nenhuma outra parte do sistema deverá realizar chamadas HTTP diretamente.

Toda comunicação externa deverá passar por esta camada.

---

# Estrutura Inicial do Projeto

```text
font-hunter/

│

├── assets/
│
├── css/
│
├── docs/
│
├── js/
│
├── pages/
│
├── index.html
│
├── README.md
│
└── LICENSE
```

---

# Organização do JavaScript

Nenhum arquivo JavaScript deverá crescer indefinidamente.

A organização será feita por responsabilidade.

Exemplo:

```text
js/

app.js

upload.js

cropper.js

preview.js

filters.js

pagination.js

favorites.js

history.js

search.js

fontService.js

storage.js

settings.js

utils.js
```

Cada módulo deverá possuir uma única responsabilidade.

---

# Organização do CSS

O CSS seguirá o mesmo princípio.

```text
css/

global.css

variables.css

layout.css

components.css

home.css

results.css

responsive.css

darkmode.css
```

Nunca concentrar todo o CSS em um único arquivo.

---

# Fluxo do Usuário

O fluxo principal será sempre o mesmo.

```text
Página Inicial

↓

Enviar imagem

↓

Opcionalmente cortar imagem

↓

Melhorar contraste (opcional)

↓

Enviar para análise

↓

Receber resultados

↓

Aplicar filtros

↓

Comparar fontes

↓

Favoritar

↓

Baixar fonte

↓

Nova pesquisa
```

Todas as funcionalidades futuras deverão respeitar esse fluxo.

---

# Fluxo de Dados

A imagem enviada passa por diversas etapas.

```text
Imagem

↓

Pré-processamento

↓

Serviço de identificação

↓

Bibliotecas de fontes

↓

Normalização

↓

Ordenação

↓

Filtros

↓

Renderização
```

Nenhuma API deverá enviar dados diretamente para a interface.

Antes da exibição, todos os resultados deverão ser convertidos para um formato interno único.

---

# Modelo Interno de Fonte

Independentemente da origem dos dados, toda fonte deverá ser convertida para um mesmo formato.

Exemplo:

Nome

Categoria

Subcategoria

Licença

Autor

Biblioteca

URL

Download

Similaridade

Idiomas

Caracteres

Preview

Favorita

OriginalDetectada

Esse padrão evita tratamentos diferentes para cada API.

---

# Fontes de Dados

O Font Hunter deverá trabalhar com múltiplas fontes.

Exemplos:

Google Fonts

Fontshare

Bunny Fonts

Open Foundry

Font Squirrel

Outras poderão ser adicionadas futuramente.

---

# Ordem de Prioridade

Sempre que houver resultados equivalentes:

1. Fonte original detectada

2. Google Fonts

3. Demais bibliotecas gratuitas

4. Fontes comerciais

A ordem poderá ser alterada apenas pelos filtros do usuário.

---

# Filtros

Os filtros fazem parte da arquitetura do sistema.

Eles não são apenas elementos visuais.

Todo resultado poderá ser filtrado por:

* biblioteca

* gratuita

* comercial

* categoria

* subcategoria

* licença

* idiomas

* autor

* ano

* similaridade

Os filtros deverão funcionar sem necessidade de nova consulta às APIs.

---

# Histórico

O histórico pertence ao navegador.

Nenhum login será exigido.

O sistema armazenará localmente as últimas pesquisas realizadas.

O limite inicial será de 10 pesquisas.

---

# Favoritos

Os favoritos também pertencem ao navegador.

Sempre que possível deverão ser armazenados localmente.

Caso exista autenticação no futuro, deverá ser feita sincronização opcional.

Nunca obrigatória.

---

# Responsividade

Desktop é a prioridade.

O sistema deverá adaptar-se para tablets e celulares.

Entretanto, nenhuma funcionalidade poderá existir apenas na versão mobile.

Todo recurso disponível no desktop também deverá existir no celular.

---

# Tema

O sistema possuirá dois temas.

* Claro (padrão)

* Escuro

A escolha deverá permanecer salva no navegador.

---

# Escalabilidade

A arquitetura deverá permitir futuramente:

* novas bibliotecas

* novas APIs

* novos idiomas

* novos filtros

* novas formas de pesquisa

sem necessidade de reescrever o núcleo do projeto.

---

# Papel do Claude Code

Durante o desenvolvimento, o Claude Code atuará como desenvolvedor do projeto.

Ele poderá sugerir melhorias técnicas.

Entretanto, não poderá alterar:

* identidade visual

* arquitetura

* organização das pastas

* fluxo principal

* experiência do usuário

sem aprovação explícita do Product Owner.

Toda sugestão arquitetural deverá ser apresentada antes de ser implementada.

# Capítulo 3 — Experiência do Usuário (UX)

---

# Filosofia da Experiência

O Font Hunter deve transmitir a sensação de uma ferramenta profissional, rápida, moderna e confiável.

O usuário nunca deve sentir que está utilizando um projeto experimental ou acadêmico.

A experiência deve ser semelhante à de produtos como Google Fonts, Figma, GitHub e Notion: interfaces limpas, poucos elementos visuais, respostas rápidas e navegação intuitiva.

O sistema deve reduzir ao máximo o número de cliques necessários para atingir o objetivo principal.

---

# Objetivo da Experiência

O usuário deve conseguir descobrir uma fonte em menos de um minuto.

Esse é o principal indicador de sucesso do produto.

Todo o restante da interface existe para apoiar esse objetivo.

---

# Jornada Ideal

A jornada ideal do usuário deverá seguir esta sequência.

```text
Entrar no site

↓

Enviar imagem

↓

Aguardar análise

↓

Visualizar resultados

↓

Comparar fontes

↓

Baixar a escolhida

↓

Sair satisfeito
```

O sistema deve evitar qualquer distração durante esse processo.

---

# Tempo de Aprendizado

O usuário deve conseguir utilizar o Font Hunter pela primeira vez sem necessidade de qualquer tutorial.

Todas as funções principais deverão ser autoexplicativas.

Sempre que possível, utilizar ícones acompanhados de texto.

---

# Princípio da Simplicidade

Toda tela deverá responder à seguinte pergunta:

> "Este elemento ajuda o usuário a encontrar uma fonte?"

Se a resposta for "não", o elemento deve ser reconsiderado.

---

# Carga Cognitiva

A interface nunca deverá apresentar grande quantidade de informações simultaneamente.

Informações secundárias deverão permanecer ocultas até que o usuário demonstre interesse.

Exemplos:

* caracteres suportados

* variantes

* idiomas

* licença detalhada

* informações técnicas

Esses conteúdos poderão aparecer em:

* menus expansíveis

* acordeões

* popovers

* modais

Jamais deverão competir visualmente com os resultados principais.

---

# Comportamento das Páginas

## Página Inicial

A página inicial deve transmitir simplicidade.

O usuário deve compreender em poucos segundos:

* o que a ferramenta faz;
* como utilizá-la;
* quais formatos são aceitos.

Não devem existir elementos desnecessários.

---

## Página de Resultados

A página de resultados possui prioridade máxima.

Toda a experiência deverá favorecer a comparação entre fontes.

A imagem enviada pelo usuário permanecerá fixa na tela.

Somente a lista de resultados deverá possuir rolagem.

Essa decisão reduz a necessidade de o usuário memorizar detalhes da imagem original.

---

# Comparação Tipográfica

A comparação entre fontes é o coração do projeto.

Sempre que possível, a imagem original deverá permanecer visível.

O preview da fonte deverá ficar próximo da imagem.

Quanto menor o deslocamento visual entre ambos, melhor será a experiência.

---

# Preview

O preview deverá responder imediatamente às ações do usuário.

Alterações de:

* texto

* tamanho

deverão atualizar todas as fontes exibidas.

Mesmo fontes presentes em outras páginas deverão utilizar o novo texto quando forem exibidas.

O usuário nunca deverá precisar digitar novamente.

---

# Favoritos

Adicionar uma fonte aos favoritos deverá exigir apenas um clique.

O sistema deverá fornecer retorno visual imediato.

Não deverá existir confirmação.

Não deverá existir mensagem de sucesso.

O estado visual do botão já é suficiente.

---

# Histórico

O histórico deverá funcionar silenciosamente.

Nenhuma configuração será necessária.

Sempre que possível, o usuário deverá poder reabrir pesquisas anteriores rapidamente.

---

# Pesquisa Manual

Além da pesquisa por imagem, o sistema deverá permitir localizar uma fonte digitando seu nome.

Essa funcionalidade deverá utilizar exatamente a mesma interface de resultados.

---

# Filtros

Os filtros nunca deverão esconder informações importantes.

Sempre que um filtro estiver ativo, isso deverá ficar claramente visível.

Filtros deverão ser cumulativos.

Exemplo:

Google Fonts

*

Sans Serif

*

Gratuitas

*

Acima de 90%

---

# Ordenação

Os resultados deverão seguir a seguinte prioridade.

1. Fonte original detectada

2. Alternativas gratuitas

3. Alternativas comerciais

Dentro de cada grupo, ordenar por similaridade.

---

# Resultado Original

Quando a fonte identificada for comercial, ela deverá aparecer primeiro.

Entretanto, deverá possuir indicação clara de que se trata de uma fonte paga.

Logo abaixo deverão aparecer as alternativas gratuitas.

O objetivo é informar sem incentivar aquisição de fontes pagas.

---

# Biblioteca da Fonte

Cada resultado deverá informar claramente sua origem.

Exemplos:

Google Fonts

Fontshare

Font Squirrel

Bunny Fonts

Open Foundry

Outras futuras.

---

# Download

Sempre que existir download gratuito, ele deverá estar disponível imediatamente.

Jamais esconder downloads gratuitos.

Jamais exigir cadastro.

Jamais exigir login.

---

# Licença

A licença deverá ser exibida de forma resumida.

Exemplo:

SIL Open Font License

Apache 2.0

MIT

Domínio Público

Licenças detalhadas poderão ser abertas em uma área secundária.

---

# Feedback Visual

Toda ação deverá produzir resposta imediata.

Exemplos:

Upload realizado.

Imagem carregada.

Fonte favoritada.

Filtro aplicado.

Pesquisa concluída.

Não é necessário utilizar mensagens em todas as situações.

Mudanças visuais costumam ser suficientes.

---

# Erros

Mensagens de erro devem ajudar o usuário.

Evitar textos genéricos.

Ruim:

"Ocorreu um erro."

Bom:

"Não foi possível identificar texto suficiente nesta imagem. Tente selecionar apenas a área onde aparece o texto."

---

# Estados Vazios

Quando nenhuma fonte for encontrada, o sistema deverá orientar o usuário.

Exemplos:

Tente uma imagem com maior resolução.

Aumente o contraste.

Recorte apenas o texto.

Utilize letras maiores.

---

# Performance Percebida

Mesmo que uma consulta demore alguns segundos, o usuário nunca deverá sentir que o sistema travou.

Durante carregamentos deverão existir:

* animações suaves

* barra de progresso

* mensagens indicando o estágio atual

Exemplos:

Preparando imagem...

Identificando fonte...

Consultando bibliotecas...

Organizando resultados...

Finalizando...

---

# Acessibilidade

Todo recurso importante deverá poder ser utilizado:

* por teclado

* por mouse

* por touch

O sistema deverá utilizar contraste adequado.

Ícones importantes deverão possuir descrição textual.

---

# Consistência

Botões iguais deverão possuir sempre o mesmo comportamento.

Cores iguais deverão possuir sempre o mesmo significado.

O usuário nunca deverá precisar reaprender a interface ao navegar entre páginas.

---

# Sensação Final

Ao terminar uma pesquisa, o usuário deverá sentir que encontrou tudo o que precisava em um único lugar.

Essa é a principal experiência que o Font Hunter deve entregar.

O sistema não deve apenas identificar uma fonte.

Ele deve transmitir confiança suficiente para que o usuário encerre sua pesquisa sem precisar abrir outros sites.

# Capítulo 4 — Architecture Decision Records (ADR)

---

# Objetivo

Este capítulo registra todas as decisões arquiteturais permanentes do Font Hunter.

Cada decisão contém:

* o problema;
* a decisão tomada;
* a justificativa;
* as consequências.

Essas decisões não devem ser alteradas sem aprovação explícita do Product Owner.

---

# ADR-001

## O Font Hunter não exigirá login para uso básico.

### Problema

Grande parte das ferramentas disponíveis exige criação de conta antes da utilização.

Isso aumenta a fricção e afasta usuários ocasionais.

### Decisão

Toda funcionalidade principal deverá estar disponível imediatamente.

Sem cadastro.

Sem login.

Sem criação de conta.

### Consequências

O histórico deverá ser armazenado localmente.

Favoritos deverão funcionar localmente.

Caso exista autenticação no futuro, ela será opcional.

---

# ADR-002

## Google Fonts possui prioridade.

### Problema

Existem dezenas de bibliotecas gratuitas.

Nem todas possuem a mesma qualidade.

### Decisão

Resultados provenientes do Google Fonts terão prioridade na listagem.

### Justificativa

Maior confiabilidade.

Melhor documentação.

Excelente suporte a idiomas.

Licenciamento claro.

Grande comunidade.

### Consequências

Demais bibliotecas continuam sendo pesquisadas.

Entretanto, Google Fonts sempre aparecerá primeiro quando houver resultados equivalentes.

---

# ADR-003

## O projeto nunca dependerá exclusivamente de uma única API.

### Problema

APIs gratuitas podem ser descontinuadas.

Também podem alterar limites ou passar a cobrar.

### Decisão

Toda integração deverá possuir possibilidade de substituição.

Sempre que possível deverão existir alternativas.

### Consequências

O sistema deverá utilizar uma camada intermediária para comunicação com APIs.

Isso permitirá trocar serviços futuramente sem alterar o restante da aplicação.

---

# ADR-004

## O usuário controla os filtros.

### Problema

Cada designer possui preferências diferentes.

Alguns desejam apenas Google Fonts.

Outros desejam pesquisar todas as bibliotecas.

### Decisão

Os resultados poderão ser filtrados pelo usuário.

### Consequências

A arquitetura deverá permitir adicionar novas bibliotecas sem alterar os filtros existentes.

---

# ADR-005

## A imagem original permanecerá visível durante toda a análise.

### Problema

Comparar memória visual com resultados reduz a precisão.

### Decisão

A imagem enviada permanecerá fixa na tela.

Somente os resultados possuirão rolagem.

### Justificativa

Facilita comparação.

Reduz erros.

Melhora a experiência.

---

# ADR-006

## Desktop possui prioridade.

### Problema

A maioria dos profissionais utiliza computadores durante criação de peças gráficas.

### Decisão

A interface será projetada inicialmente para Desktop.

Posteriormente adaptada para tablets e celulares.

### Consequências

Toda funcionalidade deverá existir em todas as plataformas.

Apenas a organização visual poderá mudar.

---

# ADR-007

## O preview pertence ao usuário.

### Problema

Cada designer deseja testar textos diferentes.

### Decisão

O texto do preview será totalmente editável.

Todas as fontes utilizarão exatamente o mesmo texto.

### Consequências

Ao alterar o preview, toda a interface deverá ser atualizada automaticamente.

---

# ADR-008

## Resultados sempre serão agrupados.

### Ordem oficial

1. Fonte original identificada

2. Alternativas gratuitas

3. Alternativas comerciais

Dentro de cada grupo:

Maior similaridade

↓

Menor similaridade

---

# ADR-009

## Fontes comerciais não serão escondidas.

### Problema

Esconder a fonte original reduz a utilidade da ferramenta.

### Decisão

A fonte original deverá aparecer mesmo sendo comercial.

Entretanto deverá possuir indicação clara:

"Paga"

Logo abaixo deverão aparecer alternativas gratuitas.

---

# ADR-010

## Downloads gratuitos nunca serão ocultados.

### Decisão

Sempre que existir um download oficial gratuito, ele deverá estar visível.

Jamais exigir login.

Jamais esconder links.

Jamais criar barreiras artificiais.

---

# ADR-011

## O projeto deve ser independente da tecnologia.

### Problema

Frameworks mudam.

Bibliotecas desaparecem.

### Decisão

A documentação nunca deverá depender de tecnologias específicas.

Exemplo:

Errado

"O sistema usa React."

Correto

"O sistema possui uma camada de interface."

### Consequências

O projeto poderá migrar de tecnologia futuramente sem necessidade de reescrever a documentação.

---

# ADR-012

## O Claude Code atua como Desenvolvedor.

### Decisão

O Claude Code possui autonomia para sugerir melhorias técnicas.

Entretanto não poderá alterar:

* arquitetura

* experiência

* identidade visual

* estrutura das pastas

* princípios do projeto

sem aprovação explícita.

---

# ADR-013

## O Product Owner possui a decisão final.

Toda decisão funcional pertence ao Product Owner.

Caso exista conflito entre:

* facilidade de implementação;

ou

* experiência do usuário;

deverá prevalecer a experiência do usuário.

---

# ADR-014

## O Font Hunter é uma plataforma de descoberta tipográfica.

O objetivo do projeto não é apenas identificar fontes.

O principal objetivo é permitir que qualquer usuário encontre rapidamente a melhor alternativa possível para uma determinada tipografia.

A identificação é apenas uma etapa desse processo.

---

# ADR-015

## A simplicidade sempre vence.

Sempre que existirem duas soluções equivalentes, deverá ser escolhida a mais simples.

Complexidade só poderá ser adicionada quando produzir benefício real para o usuário.

---

# ADR-016

## O código deve ser escrito para durar.

Todo código deverá priorizar:

* clareza;

* legibilidade;

* reutilização;

* manutenção.

Nunca priorizar soluções extremamente curtas em detrimento da compreensão.

---

# ADR-017

## O Font Hunter deve crescer sem perder sua identidade.

Novas funcionalidades poderão ser adicionadas.

Entretanto elas nunca deverão transformar o Font Hunter em:

* editor de imagens;

* editor tipográfico;

* marketplace;

* rede social;

* plataforma de cursos;

* loja.

O foco continuará sendo descoberta e comparação de fontes.

---

# Encerramento

Os ADRs representam decisões permanentes.

Sempre que surgir uma dúvida durante o desenvolvimento, este capítulo deverá ser consultado antes de qualquer implementação.

Caso uma decisão precise ser alterada, um novo ADR deverá ser criado registrando:

* a decisão antiga;

* a nova decisão;

* o motivo da alteração;

* a data da mudança.

# Capítulo 5 — Especificação Funcional Completa

---

# Objetivo

Este capítulo descreve o comportamento esperado de todas as funcionalidades do Font Hunter.

Ele não define implementação técnica.

Ele define apenas o comportamento esperado pelo usuário.

Toda implementação deverá seguir estas especificações.

---

# Estrutura Geral

O Font Hunter é composto por cinco áreas principais.

```text
Página Inicial

↓

Página de Análise

↓

Página de Resultados

↓

Favoritos

↓

Configurações
```

Todas deverão compartilhar a mesma identidade visual.

---

# Página Inicial

## Objetivo

Permitir que o usuário envie uma imagem da forma mais simples possível.

---

## Elementos obrigatórios

A tela inicial deverá conter:

* Logo oficial
* Nome Font Hunter
* Slogan
* Área de Upload
* Botão para envio manual
* Informação sobre Ctrl+V
* Informação de privacidade
* Alternância entre tema claro e escuro
* Link para Favoritos
* Link para Histórico
* Link para Configurações

---

## Upload

O upload poderá ocorrer por:

* Clique
* Drag and Drop
* Ctrl+V

Futuramente poderão existir novos métodos.

---

## Formatos aceitos

Inicialmente:

* PNG
* JPG
* JPEG
* WEBP

No futuro:

* SVG
* PDF

---

## Validação

Antes da análise deverá ser verificado:

* formato válido
* tamanho máximo
* resolução mínima

Caso alguma condição falhe, o usuário deverá receber orientação clara.

---

# Pré-processamento

Após o upload da imagem:

O sistema deverá permitir:

* Recortar imagem
* Ajustar contraste

Essas etapas são opcionais.

O usuário poderá prosseguir imediatamente.

---

# Página de Análise

## Objetivo

Preparar a imagem para identificação.

---

## Área de Recorte

O usuário poderá:

* selecionar apenas o texto
* limpar seleção
* analisar imagem inteira

---

## Ajuste de Contraste

O sistema deverá oferecer um controle simples.

Exemplo:

```text
Contraste

────────●────
```

O preview deverá atualizar imediatamente.

---

# Processo de Identificação

Após iniciar a análise:

O usuário deverá visualizar o andamento da operação.

Exemplo:

Preparando imagem...

↓

Analisando tipografia...

↓

Consultando bibliotecas...

↓

Organizando resultados...

↓

Finalizando...

---

# Página de Resultados

Esta é a página mais importante do projeto.

Toda a experiência gira em torno dela.

---

## Estrutura

A tela será dividida em duas áreas.

### Painel esquerdo

Sempre visível.

Contém:

Imagem enviada

Texto detectado

Campo para editar preview

Controle do tamanho da fonte

Filtros

---

### Painel direito

Rolagem vertical.

Contém todos os resultados encontrados.

---

# Resultado Principal

Sempre que possível deverá existir um bloco destacado.

Exemplo:

```text
Fonte Identificada

Helvetica Neue

Licença:

Comercial

Similaridade:

98%

Biblioteca:

Adobe Fonts
```

Esse bloco nunca deverá desaparecer da tela.

---

# Lista de Alternativas

Logo abaixo deverão aparecer as alternativas.

Seguindo a ordem:

1. Gratuitas

2. Comerciais

Dentro de cada grupo:

Maior similaridade

↓

Menor similaridade

---

# Card de Resultado

Cada resultado deverá possuir:

Nome

Preview

Similaridade

Categoria

Subcategoria

Licença

Biblioteca

Autor

Ano

Botão Favoritar

Botão Download

Botão Copiar CSS

Botão Abrir Biblioteca

Botão Mais Informações

---

# Preview

O preview deverá utilizar:

por padrão:

o texto detectado na imagem.

Caso não exista texto detectado:

```text
Aa Bb Cc 123
```

---

## Atualização

Toda alteração deverá atualizar:

TODOS os previews.

Mesmo aqueles pertencentes às páginas seguintes.

---

# Filtros

O usuário poderá combinar filtros.

Exemplos:

Google Fonts

*

Sans Serif

*

Gratuita

*

Acima de 95%

---

## Bibliotecas

Inicialmente:

Google Fonts

Fontshare

Font Squirrel

Open Foundry

Bunny Fonts

Outras poderão ser adicionadas futuramente.

---

## Tipo

Gratuita

Comercial

Demo

---

## Categoria

Serif

Sans Serif

Display

Script

Monospace

Handwriting

Outras

---

## Licença

SIL OFL

Apache

MIT

GPL

Domínio Público

Outras

---

## Similaridade

Slider.

Exemplo:

```text
80% ─────────── 100%
```

---

# Pesquisa por Nome

Além da pesquisa por imagem.

O usuário poderá localizar fontes digitando.

Exemplo:

```text
Pesquisar fonte...
```

Os resultados utilizarão exatamente o mesmo layout da pesquisa por imagem.

---

# Favoritos

Favoritar deverá exigir apenas um clique.

Os favoritos serão armazenados localmente.

Cada favorito deverá armazenar:

Nome

Biblioteca

Licença

Link

Data

Preview

---

# Histórico

O sistema armazenará:

Últimas 10 pesquisas.

Cada registro deverá conter:

Miniatura

Data

Quantidade de resultados

Imagem utilizada

---

# Configurações

O usuário poderá alterar:

Tema

Idioma

Tamanho padrão do preview

Quantidade de resultados por página

Bibliotecas favoritas

---

# Paginação

Os resultados deverão ser paginados.

O usuário poderá escolher:

20

50

100

resultados por página.

---

# Copiar CSS

Cada resultado deverá possuir:

```css
font-family: "...";
```

Futuramente poderão ser adicionados:

font-weight

font-style

font-display

imports

---

# Informações Avançadas

Ao expandir um resultado.

O usuário poderá visualizar:

Autor

Ano

Licença completa

Idiomas

Caracteres suportados

Variantes

Pesos

Itálico

Espaçamento

Links oficiais

---

# Compartilhamento

Cada pesquisa poderá gerar um link compartilhável.

Caso a imagem não possa ser armazenada.

O sistema deverá informar essa limitação.

---

# Pesquisa sem Imagem

O usuário poderá localizar qualquer fonte digitando seu nome.

Essa funcionalidade utilizará exatamente o mesmo banco de dados das pesquisas normais.

---

# Tema Escuro

Toda funcionalidade disponível no tema claro deverá funcionar igualmente no tema escuro.

Jamais esconder funcionalidades por causa do tema.

---

# Mobile

A interface deverá ser reorganizada.

Nunca reduzida.

Todo recurso existente no Desktop deverá permanecer disponível.

---

# Estados da Aplicação

O sistema deverá possuir estados claramente definidos.

Inicial

Imagem carregada

Pré-processamento

Analisando

Resultados

Sem resultados

Erro

Nova pesquisa

---

# Mensagens

Todas as mensagens deverão ser escritas em linguagem simples.

Evitar termos técnicos.

Evitar códigos de erro.

Sempre sugerir uma solução para o usuário.

---

# Critério de Conclusão

Uma funcionalidade somente será considerada concluída quando:

* funcionar conforme esta documentação;

* possuir comportamento consistente;

* funcionar em Desktop e Mobile;

* respeitar todos os ADRs do projeto;

* não gerar regressão em funcionalidades existentes.
