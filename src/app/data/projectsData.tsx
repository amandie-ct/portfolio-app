const projectsData = [
  {
    title: 'Pokedex',
    id: 'pokedex',
    img: 'pokedex',
    description:
      'Esse projeto consome os dados da API Rest PokeApi para exibir uma lista de pokemons, que pode ser filtrada por tipo de pokemon ao clicar em um dos botões de categoria - nesse caso, uma requisição é feita para um segundo endpoint passando o nome da categoria como parâmetro. Ao clicar em um dos mini-cards de pokemon da tela principal, o id do pokemon é passado como parâmetro na requisição e o usuário é redirecionado para uma tela que exibe mais detalhes sobre o pokemon selecionado. Os estados são armazenados usando a store do Redux-toolkit (versão mais moderna do Redux) e as requisições são feitas utilizando uma combinação da API createAsyncThunk e a biblioteca Axios. O projeto utiliza a versão mais moderna do NextJS, TypeScript, React e Styled-components para estilização.',
    project_link: 'https://pokedex-beta-sable.vercel.app/',
    repository_link: 'https://github.com/amandie-ct/next-pokedex',
    tags: [
      'NextJs',
      'TypeScript',
      'React',
      'Redux-Toolkit',
      'Styled-components',
      'Jest',
      'React Testing Library',
      'Husky'
    ]
  },
  {
    title: 'Centro Pokémon teste técnico',
    id: 'codie',
    img: 'codie',
    description:
      'Esse projeto simula um “centro de recuperação Pokémon”. No agendamento de consulta, há um formulário para preencher informações do usuário - nome, sobrenome, uma lista de regiões que é renderizada a partir do endpoint /regions da PokeApi, e uma lista de cidades renderizada de acordo com a região escolhida. O usuário deve escolher uma data, que será recebida como parâmetro numa requisição POST para que seja renderizada uma lista de horários disponíveis nessa data. O usuário deve escolher seus pokémons e utilizar um botão para adicionar mais selects de pokémons na página a medida que for necessário. Finalmente, é feito um cálculo do valor da consulta. Ao clicar no botão para concluir o agendamento, o usuário é redirecionado para uma página resumindo a transação, ou caso haja erros, para uma página de erro. As requisições são feitas utilizando React-query, o formulário é feito utilizando React-hook-form e a validação das informações utiliza a biblioteca Yup. (em andamento)',
    project_link: 'https://github.com/amandie-ct/codie-challenge',
    repository_link: 'https://github.com/amandie-ct/codie-challenge',
    tags: [
      'NextJs',
      'TypeScript',
      'React',
      'React-hook-form',
      'Styled-components',
      'React-query',
      'React Testing Library',
      'Yup',
      'Axios'
    ]
  },
  {
    title: 'Blog teste técnico (Angular)',
    id: 'waycarbon',
    img: 'waycarbon',
    description:
      'Esse projeto simula um blog utilizando Angular 17. Um post principal é renderizado a partir do endpoint /post, e comentários são renderizados a partir do endpoint /comments. O usuário pode adicionar ou responder um comentário, que será enviado em um POST request e exibido na página aninhado ou na raiz adequadamente. Ao clicar em um usuário, é exibido um modal com os seguintes detalhes: nome, data em que o usuário se tornou membro, título dos posts e uma prévia do conteúdo de cada um. (em andamento)',
    project_link: 'https://github.com/amandie-ct/waycarbon-project',
    repository_link: 'https://github.com/amandie-ct/waycarbon-project',
    tags: [
      'Angular 17',
      'Angular CLI',
      'CSS',
      'Jasmine'
    ]
  }
]

export default projectsData
