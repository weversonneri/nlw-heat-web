<p align="center">
  <img 
   src="https://user-images.githubusercontent.com/53442803/139374817-9c5dc6fc-9690-444c-b16d-ddd83023ce90.png"
    width="30%"
  />
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Funcionalidades</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📃 Sobre o projeto
A setima edição do [NLW](https://nextlevelweek.com) promovido pela **[@RocketSeat](https://www.rocketseat.com.br/)** serviu como aquecimento para o **[DoWhile 2021](https://dowhile.io/inscricao)**, então nada melhor que o tema do projeto fosse nesse sentido. 
O objetivo é o desenvolvimento de uma aplicação fullstack que permita os usuarios compartilharem suas expectativas para o evento, utilizando as tecnologias mais atuais do mercado. Aqui se encontra o front-end web da nossa aplicação utilizando ReactJS e autenticação com OAuth do Github.

<p align="center">
  <img 
    src="https://user-images.githubusercontent.com/53442803/139376416-e5b05a81-7469-4fca-a50e-b09a0ef32c50.gif"
    width="80%"
  />
</p>

## ⚙ Funcionalidades
- [x] Login com a conta do Github
- [x] Compartilhamento dos dados do perfil com Context Api
- [x] Listagem de mensagens recebidas do servidor
- [x] Atualização de mensagens em tempo real com socket.io
### Extras adicionados pós NLW
  - [x] Validação de formulario.
  - [x] Uso da lib Toastify para alertas da pagina.
  - [x] Animações com Framer Motion na lista de mensagens e botões.
  - [x] Algumas mensagens condicionais melhorias de UX.


## ✨ Tecnologias
Projeto desenvolvido utilizando as seguintes tecnologias:

- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [ReactJs](https://pt-br.reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Socket.IO](https://socket.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [OAuth Github](https://github.com/settings/developers)

## 🔖 Layout
O layout do projeto está disponivel através do link abaixo:
  * [Layout Figma](https://www.figma.com/community/file/1031699316177416916)

## 🤔 Como usar
Para usar o projeto é necessario seguir as seguintes etapas:
1. Possuir o [backend](https://github.com/weversonneri/nlw-heat-node) configurado e rodando
2. Alterar o Client ID no arquivo ``` src > configs > env.ts ```
3. Alterar as configurações do OAuth do Github ``` Homepage URL ``` e ```Authorization callback URL``` para a url da aplicação web 
> normalmente localhost:3000
4. Seguir os comandos:
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/weversonneri/nlw-heat-web.git

  # Entrar no diretório:
  $ cd nlw-heat-web

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn dev
```

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## Aprendizados
- Algumas das principais coisas que aprendi nessa etapa
  - Introdução ao Vite
  - Introdução a estilização com Sass
  - Autenticação com OAuth do Github
  - Atualização em tempo real com Socket.io

