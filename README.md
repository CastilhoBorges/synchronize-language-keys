# Ferramenta de Sincronização de Traduções

Uma utilidade para gerenciar e sincronizar arquivos de tradução multilíngues em projetos i18n.

## Motivação

Este projeto foi criado porque no software onde trabalho, os arquivos de localização (i18n) em português, inglês e espanhol estavam desorganizados - alguns com propriedades que não existiam nos outros, e fora da ordem alfabetica. Esta ferramenta resolve esse problema e ajuda a manter a consistência no futuro, pois:

1. Ordena todas as chaves em ordem alfabética para melhor organização
2. Coloca alertas onde faltam traduções, facilitando identificar o que precisa ser traduzido
3. Oferece funcionalidade para traduzir automaticamente textos ausentes

Dessa forma, se as traduções se desordenarem no futuro, basta executar esta ferramenta novamente para restaurar a consistência e completude dos arquivos de tradução.

## Visão Geral

A Ferramenta de Sincronização de Traduções aborda desafios comuns no gerenciamento de arquivos de tradução em vários idiomas:

- **Chaves Inconsistentes**: Garante que todos os objetos de idioma contenham as mesmas chaves de tradução
- **Traduções Ausentes**: Identifica e marca traduções ausentes com espaços reservados claros
- **Tradução Automática**: Preenche traduções ausentes usando serviços de tradução automática
- **Ordenação Alfabética**: Classifica todas as chaves de tradução em ordem alfabética para facilitar a manutenção

## Pré-requisitos

- Node.js 22 ou superior
- Conta gratuita na API DeepL para traduções automáticas

## Instalação

1. Clone este repositório
2. Execute `npm install` para instalar as dependências
3. Crie um arquivo `.env` baseado no `.env.example` fornecido:
   ```
   DEEPL_API_KEY=sua_chave_da_api_deepl_aqui
   ```
4. Adicione seus arquivos de localização (PT, EN, ES) ao diretório apropriado

## Funcionalidades

### Sincronização de Chaves

A função `synchronizedLanguagesKeys` garante consistência entre os arquivos de idioma:

- Cria um conjunto unificado de todas as chaves de tradução de todos os arquivos de idioma
- Ordena as chaves alfabeticamente para melhor organização
- Adiciona texto de espaço reservado para traduções ausentes
- Mantém as traduções existentes sem modificação

### Tradução Automática

A função `autoTranslate` ajuda a completar conjuntos de tradução:

- Identifica chaves com traduções ausentes
- Encontra traduções existentes para a mesma chave em outros idiomas
- Usa a API DeepL para preencher automaticamente traduções ausentes
- Prioriza idiomas de origem com base na disponibilidade

## Uso

### Executando a Ferramenta

Para sincronizar e traduzir automaticamente seus arquivos de localização:

```bash
npm start
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar esta ferramenta.
