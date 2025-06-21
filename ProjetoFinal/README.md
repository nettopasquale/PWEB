# 🎬 MiloneFlix

Projeto Full-Stack de Programação Web de catálogo de filmes e séries, com funcionalidades completas de busca, cadastro, edição e exclusão. Integra dados da [API TMDB](https://www.themoviedb.org/) e do banco MongoDB local.

Link do Frontend: https://milone-flix.vercel.app/
---

## 🚀 Tecnologias Utilizadas

| Ferramenta                 | Descrição                                      |
|----------------------------|------------------------------------------------|
| **React + Vite**           | SPA front-end moderna                          |
| **Tailwind CSS**           | Estilização responsiva com classes utilitárias |
| **React Router DOM**       | Roteamento entre páginas                       |
| **Axios**                  | Requisições HTTP                               |
| **Express.js**             | Servidor e API REST                           |
| **MongoDB + Mongoose**     | Banco de dados local                          |
| **React Hook Form**        | Controle e validação de formulários           |
| **Yup**                    | Validação de dados                            |
| **browser-image-compression** | Compressão de imagens no navegador       |

---

## 🗂️ Estrutura do Projeto

```bash
miloneflix/
├── public/
├── src/
│   ├── components/       # Header, Footer, Botões, Inputs, Modal
│   ├── hooks/            # useFilmes, useBuscar, useCadastrar, useModalFilme
│   ├── pages/            # Listar, Buscar, Cadastrar
│   ├── services/         # API base (opcional)
│   └── App.jsx
├── backend/              # API Node + Express
│   ├── models/           # Schema dos filmes
│   ├── controllers/      # Lógica CRUD
│   ├── routes/           # Rotas Express
│   └── server.js

---

## ✅ Funcionalidades

- 🔍 **Buscar filmes** pela API TMDB e pelo MongoDB (com filtro de conteúdo e scroll infinito)
- ➕ **Cadastrar** filmes e séries com formulário validado, avaliação por estrelas e upload de capa
- ✏️ **Editar** filmes cadastrados via modal
- 🗑️ **Excluir** filmes com confirmação e mensagens de sucesso/erro
- 📦 **Compressão de imagens** automática no upload para evitar excesso de payload
- 💬 **Mensagens de feedback visual** (cadastro, edição, exclusão)

---

## 🔄 Hooks Personalizados

| Hook           | Descrição                                              |
|----------------|---------------------------------------------------------|
| `useFilmes()`  | Lida com a listagem inicial e scroll infinito de filmes |
| `useBuscar()`  | Controla a busca dinâmica e edição/exclusão via modal   |
| `useCadastrar()` | Controla estados, validação e envio do formulário     |
| `useModalFilme()` | Gerencia os dados, imagem e edição dentro do modal   |

---

## 🧪 Testes e Considerações

- Requisições testadas com **Thunder Client** e **Postman**
- Implementado filtro de palavras proibidas (filmes adultos/softcore)
- Redução de erros com tratamento adequado em todo o backend
- Testado com imagens comprimidas para manter performance

---

## 📌 Como rodar o projeto localmente

### 1. Instale dependências
```bash
npm install
```

### 2. Inicie o backend
```bash
cd backend
node server.js
# ou
nodemon server.js
# ou
npm run dev
```

### 3. Inicie o FrontEnd
```bash
npm run dev
```

### 4. Link do Backend
- Backend online: https://miloneflix-api.onrender.com

Autor
Pasquale Milone Netto
Projeto acadêmico com foco em React, MongoDB e integração de API pública.