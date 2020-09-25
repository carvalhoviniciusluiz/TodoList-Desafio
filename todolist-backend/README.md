<h1 align="center">
  ## TodoList#Desafio
</h1>

<blockquote align="center">“Ninguém pode fugir de sua própria história”!</blockquote>

<p align="center">
  <img alt="challenge" src="https://img.shields.io/badge/challenge-%2304D361">

  <a href="https://github.com/carvalhoviniciusluiz">
    <img alt="Made by Vinicius Carvalho" src="https://img.shields.io/badge/made%20by-Vinicius%20Carvalho-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#8ball-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#metal-como-usar-o-insomnia">Como usar o insomnia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#loop-link-do-desafio">Link do desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o projeto

### Desafio

Criar um to do-list utilizando ReactJs ou RN, que grava e consome dados de uma api REST feita em node.

### Observações

   - Toda aplicação deve ser feita com typescript
   - Não é necessario cadastro de usuario mas é um diferencial
   - Design não será avaliado
   - Será avaliada a escrita e forma de uso dos hook

### **As ferramentas que você irá encontrar**

Aplicação criada do zero usando [Express.js](https://expressjs.com/pt-br/api.html), conta com as seguintes ferramentas:

- NestJs;
- TypeOrm;

## :8ball: Instalação

Os próximos passos devem ser executados no terminal.

Baixando as dependências do sistema:

    yarn

Subindo um servidor de desenvolvimento:

    yarn start:dev

## :metal: Como usar o Insomnia

[Insomnia](https://insomnia.rest/download/) é uma ferramenta que facilita testes de api. Você pode importar as rotas do projeto clique no butão `Run in Insomnia` que fica localizado no topo da página para facilitar os seus testes.

### **Get todo list**
Retorna todos os itens do todo cadastrados;

<p align="center">
  <img src="https://user-images.githubusercontent.com/22005684/94219471-464dcf80-febd-11ea-8ab2-3417c07b1917.png" alt="Image 1" />
</p>

### **Create todo item**
Cria um novo item no todo;

<p align="center">
  <img src="https://user-images.githubusercontent.com/22005684/94219480-4c43b080-febd-11ea-8150-aea620fc5c6c.png" alt="Image 2" />
</p>

### **Update todo item**
Atualiza o atributo `done` de um item específico no todo;

<p align="center">
  <img src="https://user-images.githubusercontent.com/22005684/94219482-506fce00-febd-11ea-877f-a4d59800eae9.png" alt="Image 3" />
</p>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
