# API.md

**Projeto:** Font Hunter

**Versão:** 1.0

---

# Objetivo

Este documento descreve todas as integrações externas utilizadas pelo Font Hunter.

Seu objetivo é padronizar a comunicação entre o sistema e serviços externos.

Nenhuma API deverá ser integrada diretamente ao projeto sem ser documentada neste arquivo.

---

# Filosofia

O Font Hunter deve permanecer independente de qualquer fornecedor específico.

Nenhuma API deverá ser considerada permanente.

Toda integração deverá poder ser substituída futuramente.

---

# Fluxo Geral

O fluxo de comunicação deverá seguir esta sequência.

```text
Usuário

↓

Upload da imagem

↓

Pré-processamento

↓

OCR

↓

Identificação da fonte

↓

Consulta às bibliotecas

↓

Normalização

↓

Renderização
```

Todas as APIs deverão fornecer dados para uma camada intermediária de normalização.

A interface nunca deverá consumir diretamente respostas de APIs externas.

---

# Camada de Serviços

Toda comunicação externa deverá ocorrer através da camada:

```text
Services
```

Exemplo:

```text
js/

services/

ocrService.js

fontDetectionService.js

googleFontsService.js

fontshareService.js

storageService.js
```

Nenhuma chamada HTTP deverá existir dentro da interface.

---

# OCR

## Objetivo

Extrair texto da imagem.

---

## API atual

Tesseract.js

---

## Tipo

Processamento local.

---

## Custo

Gratuito.

---

## Necessita internet

Não.

---

## Vantagens

Sem custo.

Privacidade.

Funciona offline.

---

## Desvantagens

Mais lento.

Menor precisão em fontes decorativas.

---

## Alternativas

Google Vision

Azure Vision

AWS Textract

EasyOCR

OCR.Space

---

# Identificação Tipográfica

## Objetivo

Encontrar a fonte utilizada na imagem.

---

## API atual

WhatFontIs API

---

## Plano

Gratuito.

---

## Limite

200 requisições por dia.

---

## Resposta esperada

Lista ordenada de fontes semelhantes.

---

## Problema conhecido

Não retorna porcentagem de similaridade.

---

## Estratégia adotada

O sistema calculará uma relevância própria baseada na posição do resultado.

---

## Alternativas

WhatTheFont

Adobe Fonts Search

Fontspring Matcherator

OpenAI Vision

Google Gemini Vision

---

# Google Fonts

## Objetivo

Obter informações completas das fontes gratuitas.

---

## Dados utilizados

Nome

Categoria

Autor

Licença

Arquivos

Variantes

Idiomas

Pesos

Links

---

## Prioridade

Máxima.

Sempre deverá aparecer antes das demais bibliotecas gratuitas.

---

## Cache

Sempre utilizar cache local.

Evitar chamadas repetidas.

---

# Fontshare

Objetivo

Biblioteca adicional.

---

Prioridade

Após Google Fonts.

---

# Font Squirrel

Objetivo

Biblioteca complementar.

---

Prioridade

Após Google Fonts.

---

# Bunny Fonts

Objetivo

Biblioteca complementar.

---

Prioridade

Após Fontshare.

---

# Open Foundry

Objetivo

Biblioteca complementar.

---

Prioridade

Após Bunny Fonts.

---

# Font Discovery

Esta seção documenta as integrações responsáveis pela área de descoberta de fontes da home.

Todas seguem os mesmos princípios do projeto: substituíveis, documentadas, isoladas, reutilizáveis e testáveis.

Nenhuma dessas integrações se comunica diretamente com a interface.

Toda comunicação ocorre através da camada de serviços, conforme definido neste documento.

---

## Recomendações da Semana

### Objetivo

Exibir fontes selecionadas manualmente pela curadoria do Font Hunter.

---

### Tipo

Manual.

Gerenciada pela equipe do projeto.

---

### Fonte dos dados

Arquivo de configuração interno ou registro no Supabase.

A estrutura de dados seguirá o modelo interno de fonte definido neste documento.

---

### Frequência de atualização

Semanal ou conforme decisão do Product Owner.

---

### Camada de serviço responsável

```text
services/discoveryService.js
```

---

### Fallback

Caso os dados não estejam disponíveis, a seção não deverá ser exibida.

A ausência desta seção não deve impactar nenhuma outra funcionalidade.

---

## Novidades do Google Fonts

### Objetivo

Exibir automaticamente as fontes adicionadas mais recentemente ao catálogo do Google Fonts.

---

### Tipo

Automática.

Integrada à API oficial do Google Fonts.

---

### API utilizada

Google Fonts Developer API.

---

### Parâmetros relevantes

Ordenação por data de inclusão.

Limite de exibição: a definir conforme layout.

---

### Custo

Gratuita com chave de API.

---

### Cache

Obrigatório.

Os dados devem ser armazenados em cache para evitar chamadas repetidas.

O tempo de validade do cache será definido durante a implementação.

---

### Camada de serviço responsável

```text
services/googleFontsService.js
```

Esta integração reutiliza o serviço já existente do Google Fonts, adicionando apenas o filtro por data.

---

### Fallback

Caso a API esteja indisponível ou o cache esteja expirado, a seção não deverá ser exibida.

---

## Fontes Populares

### Objetivo

Exibir as fontes mais acessadas ou favoritadas pelos usuários da plataforma.

---

### Tipo

Automática.

Baseada em estatísticas internas de uso.

---

### Fonte dos dados

Supabase.

Contagem de eventos de acesso e favoritos por fonte, sem identificação pessoal do usuário.

---

### Privacidade

Nenhum dado pessoal será armazenado.

Apenas contadores anônimos por identificador de fonte.

---

### Camada de serviço responsável

```text
services/discoveryService.js
```

---

### Fallback

Caso não existam dados suficientes (plataforma nova), a seção exibirá uma seleção curada manualmente até que os dados de uso estejam disponíveis.

---

## Fonte Aleatória

### Objetivo

Apresentar ao usuário uma fonte gratuita aleatória, escolhida a partir do catálogo consolidado das bibliotecas integradas.

---

### Tipo

Local.

Sem chamada externa por ação.

A aleatoriedade é aplicada sobre o catálogo já carregado em cache.

---

### Comportamento esperado

A cada acionamento, uma fonte diferente é selecionada.

A seleção deverá ser verdadeiramente aleatória dentro do catálogo disponível.

---

### Camada de serviço responsável

```text
services/discoveryService.js
```

---

### Fallback

Caso o catálogo não esteja disponível, o botão deverá ser desabilitado com mensagem clara ao usuário.

---

# APIs Futuras

O projeto deverá permitir adicionar novas bibliotecas sem alterar a arquitetura.

Cada nova integração deverá seguir exatamente esta documentação.

---

# Normalização

Independentemente da origem dos dados.

Toda fonte deverá ser convertida para o formato interno oficial.

Exemplo:

```text
id

name

similarity

source

license

category

subcategory

author

year

downloadUrl

officialUrl

previewUrl

supportedLanguages

supportedCharacters

isFree

isOriginal
```

Esse formato é obrigatório.

---

# Ordem de Processamento

1.

Receber imagem.

↓

2.

Executar OCR.

↓

3.

Executar identificação.

↓

4.

Consultar bibliotecas.

↓

5.

Normalizar resultados.

↓

6.

Ordenar.

↓

7.

Aplicar filtros.

↓

8.

Renderizar interface.

---

# Fallback

Caso uma API falhe.

O sistema deverá continuar funcionando sempre que possível.

Exemplo:

WhatFontIs indisponível.

↓

Continuar oferecendo pesquisa manual.

↓

Continuar exibindo Google Fonts.

↓

Informar limitação ao usuário.

Jamais interromper completamente a aplicação.

---

# Limites

Sempre considerar:

Rate Limit.

Timeout.

Quota diária.

Tempo médio de resposta.

---

# Cache

Sempre que possível utilizar cache.

Objetivos:

Reduzir chamadas.

Melhorar velocidade.

Diminuir custos.

---

# Segurança

Jamais expor:

Chaves privadas.

Tokens.

Credenciais.

URLs internas.

Sempre utilizar variáveis de ambiente quando necessário.

---

# Logs

Toda integração deverá registrar:

Tempo de resposta.

Falhas.

Timeouts.

Erros.

Esses registros nunca deverão conter informações pessoais do usuário.

---

# Estratégia de Evolução

Antes de adicionar uma nova API.

Responder:

Ela melhora a experiência?

É realmente necessária?

Existe alternativa gratuita?

Ela aumenta dependência?

Ela respeita os princípios do projeto?

Somente após essas respostas a integração poderá ser aprovada.

---

# Integração com Supabase

O Supabase será utilizado como backend oficial.

Inicialmente para:

Configurações futuras.

Possível sincronização de favoritos.

Histórico (caso exista login opcional futuramente).

Estatísticas de uso.

Storage.

O projeto não deverá depender do Supabase para realizar pesquisas locais.

A pesquisa principal continuará funcionando mesmo que o backend esteja indisponível.

---

# Privacidade

Sempre priorizar processamento local.

Enviar para APIs externas apenas as informações estritamente necessárias.

O usuário deverá ser informado quando algum processamento ocorrer em serviços externos.

---

# Regra Geral

Toda integração deverá ser:

Substituível.

Documentada.

Isolada.

Reutilizável.

Testável.

Nenhuma API deverá controlar a arquitetura do Font Hunter.

A arquitetura deve controlar as APIs.
