## MiloneFlix
Projeto da disciplina Programação Web

## Autor:  
Pasquale Milone Neto  

## Tema e resumo: 
Site temático para listagem e cadastro de filmes e séries. O usuário poderá cadastrar filmes e séries no sistema, buscar por eles através do nome dos títulos,
alterar dados e excluir filmes. Os dados serão cadastrados por um arquivo json, seguindo o exemplo abaixo:

``
    {   "id": 2,
        "titulo": "O Show de Truman",
        "diretor": "Peter Weir",
        "ano": 1998,
        "genero": "Drama",
        "duracao": 103,
        "elenco": "Jim Carrey", "Laura Linney", "Ed Harris",
        "classificacao": "12 anos",
        "sinopse": "Truman Burbank vive uma vida perfeita, mas não sabe que
        sua existência é um reality show televisionado 24h por dia...",
        "notaUsuario": 4.7,
        "dataAdicao": "2023-11-05",
    }
``

## Protótipo de Alta Fidelidade
O protótipo deste projeto foi construído no Figma, pensando em layouts responsivos, tanto para web quanto mobile:

https://www.figma.com/design/1uavIpFkg93Oqqifylxuui/MiloneFlix---Progama%C3%A7%C3%A3o-Web?node-id=0-1&t=RkONcG4tAE21hI6e-1

As imagens individuais do protótipo estão no respositório deste projeto.

## EM ANDAMENTO: 
- Construção em código do projeto; 
    -- Definir se o projeto será feito com HTML, CSS e JS puro, ou se será utilizado React;

- Api funcionando; 
    -- A conexão com a api de filmes provida pela professora está funcionando corretamente;

- Sistemas de cadastro simples; 
    -- Decidir qual meio de cadastro de dados será realizado: LocalStorage ou Banco de Dados externo;