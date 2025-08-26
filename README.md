# 🎬 Catálogo de Filmes em React

Um projeto simples desenvolvido em React.js que funciona como um catálogo de filmes, permitindo ao usuário visualizar os filmes mais populares e buscar por títulos específicos. A aplicação consome dados da API do [The Movie Database (TMDb)](https://www.themoviedb.org/).

## 🖼️ Demonstração

*Sem (Por enquanto)

## ✨ Funcionalidades

- [x] Listagem dos filmes mais populares do momento.
- [x] Campo de busca para encontrar filmes por título.
- [x] Visualização de detalhes de um filme (pôster, sinopse, nota de avaliação).
- [x] Funcionalidade de dar like em filmes.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **[React.js](https://reactjs.org/)**: Biblioteca para a construção da interface de usuário.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build para um desenvolvimento rápido.
* **[Axios](https://axios-http.com/)**: Cliente HTTP para fazer as chamadas à API do TMDb.
* **[CSS Modules](https://github.com/css-modules/css-modules)**: Para estilização dos componentes de forma escopada.

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para executar a aplicação na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/catalogo-filmes-react.git](https://github.com/seu-usuario/catalogo-filmes-react.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd catalogo-filmes-react
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    * Crie um arquivo chamado `.env.local` na raiz do projeto.
    * Dentro dele, adicione sua chave da API do TMDb. Você pode conseguir uma gratuitamente no site deles.
    ```
    VITE_API_KEY="SUA_CHAVE_DA_API_AQUI"
    ```

5.  **Inicie a aplicação:**
    ```bash
    npm run dev
    ```

6.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

---

Feito por Luiz Felipe Ribeiro Souza (https://github.com/luizfeliperibs).
