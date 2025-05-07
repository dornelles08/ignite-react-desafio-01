# ignite-react-desafio-01: Lista de Tarefas

Este projeto é uma aplicação simples de lista de tarefas construída com React e TypeScript. Permite aos usuários criar, completar e deletar tarefas.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Deletar tarefas
- Acompanhar o progresso de conclusão das tarefas
- Estado vazio para quando não há tarefas

## Tecnologias Utilizadas

- React
- TypeScript
- CSS Modules
- Vite
- Phosphor Icons

## Começando

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
  git clone https://github.com/dornelles08/ignite-react-desafio-01.git
```

2. Navegue até o diretório do projeto:

```bash
  cd ignite-react-desafio-01
```

3. Instale as dependências:

```bash
  npm install
```

ou

```bash
  yarn
```

### Executando a Aplicação

Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```

ou

```bash
  yarn dev
```

A aplicação estará disponível em http://localhost:5173.

### Estrutura do Projeto

```
ignite-react-desafio-01/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.svg
│   │   └── clipboard.svg
│   ├── components/
│   │   ├── Header/
│   │   ├── Task/
│   │   └── TaskList/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       └── global.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Como Usar

1. Digite uma tarefa no campo de entrada no topo da página
2. Clique no botão "Criar" ou pressione Enter para adicionar a tarefa
3. Para marcar uma tarefa como concluída, clique no círculo ao lado da tarefa
4. Para deletar uma tarefa, clique no ícone de lixeira

## Licença

Este projeto é parte do curso Ignite React da Rocketseat.

## Agradecimentos

**Rocketseat** por fornecer o desafio e o design.
