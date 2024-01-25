const projectsData = [
  {
    title: 'Pokedex',
    id: 'pokedex',
    img: 'pokedex',
    description:
      'Esse projeto consome os dados da API Rest PokeApi para exibir uma lista de pokemons, que pode ser filtrada por tipo de pokemon ao clicar em um dos botões de categoria - nesse caso, uma requisição é feita para um segundo endpoint passando o nome da categoria como parâmetro. Ao clicar em um dos mini-cards de pokemon da tela principal, o id do pokemon é passado como parâmetro na requisição e o usuário é redirecionado para uma tela que exibe mais detalhes sobre o pokemon selecionado. Os estados são armazenados usando a store do Redux-toolkit (versão mais moderna do Redux) e as requisições são feitas utilizando uma combinação da API createAsyncThunk e a biblioteca Axios. O projeto utiliza a versão mais moderna do NextJS, TypeScript, React e Styled-components para estilização. (em andamento)',
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
  }
  // {
  //   title: 'Previsão do Tempo',
  //   id: 'weather_app',
  //   img: 'weather_app',
  //   description: '',
  //   project_link: '',
  //   repository_link: '',
  //   tags: ['JavaScript', 'HTML', 'CSS']
  // }
]

export default projectsData
