# Editor de Rascunhos para Redação

Este projeto é uma aplicação web simples desenvolvida com **React**, simulando
uma ferramenta de auxílio à redação. Ele foi criado como parte do teste prático
para a vaga de desenvolvedor full stack na **Repertório**, com foco em melhorar
a experiência dos alunos com conteúdos do **Enem**.

## Objetivo

Criar uma aplicação que permita:

- **Adicionar parágrafos** para compor um rascunho de redação.
- **Salvar o rascunho** atual (simulando a persistência via localStorage).
- **Visualizar o texto** completo com opções para editar ou remover parágrafos.

## Funcionalidades

- **Adicionar Parágrafo**: Área de texto para inserir um novo parágrafo e botão
  para adicioná-lo ao rascunho.
- **Salvar Rascunho**: Grava o estado atual do rascunho utilizando localStorage.
- **Visualizar Texto**: Exibe os parágrafos adicionados com opções para editar
  ou remover.
- **Responsividade**: Interface adaptada para diferentes tamanhos de tela e
  dispositivos.

## Componentes Principais

- **DraftEditor**: Gerencia a edição, visualização e estado dos parágrafos.
- **Paragraph**: Renderiza cada parágrafo individualmente.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [FontAwesome](https://fontawesome.com/)

## Instruções de Instalação e Execução

1. Certifique-se de que o [Node.js](https://nodejs.org/) esteja instalado.
2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação via navegador em:
   [http://localhost:3000](http://localhost:3000) _(A porta pode variar conforme
   a configuração do Vite.)_

## Estrutura do Projeto

```bash
.
├── public
│   └── index.html
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── components
│   │   ├── Paragraph.jsx
│   │   └── DraftEditor.jsx
│   ├── assets
│   └── ...
├── vite.config.js
├── tailwind.config.js
└── package.json
```

- O projeto segue a estrutura de componentes funcionais do React.
- A configuração do Vite foi personalizada para suportar o uso do Tailwind CSS e
  DaisyUI.
- Este projeto foi desenvolvido utilizando a versão 17 do React.

## Notas e Referências Técnicas

- [Documentação do FontAwesome](https://fontawesome.com/docs)
- [Documentação do DaisyUI](https://daisyui.com/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do Vite](https://vitejs.dev/guide/)
- [Documentação do React](https://reactjs.org/docs/getting-started.html)

## Link

- [Link do App Hospedado na Vercel](https://react-js-draft-editor.vercel.app/)
