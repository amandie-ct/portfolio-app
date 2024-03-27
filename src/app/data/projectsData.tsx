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
  },
  {
    title: 'Codie teste técnico',
    id: 'codie',
    img: 'codie',
    description:
      'Esse projeto simula um “centro de recuperação Pokémon” utilizando React 18 e NextJS 14. O usuário pode navegar até uma tela de agendamento de consulta, onde há um formulário para que ele preencha informações sobre seus pokémons - seu nome e sobrenome em inputs de texto, uma lista de regiões que é renderizada em um elemento select a partir do endpoint /regions da PokeApi, e uma lista de cidades que é renderizada de acordo com a região escolhida, passando o nome da região como parâmetro. Além disso, o usuário deve escolher uma data que será recebida como parâmetro numa requisição POST para que seja renderizada uma lista de horários disponíveis nessa data. O usuário deve escolher seus pokémons (com limite de 6) e utilizar um botão para adicionar mais selects de pokémons na página a medida que for necessário. Finalmente, é feito um cálculo do valor a partir do número de pokémons: $70 por cada pokémon + uma taxa geracional de 3% multiplicada pelo número de geração mais alto (com teto de 30%). Ao clicar no botão para concluir o agendamento, o usuário é redirecionado para uma página resumindo a transação, e se ocorrerem erros, para uma página de erros. As requisições são feitas utilizando React-query, o formulário é feito utilizando React-hook-form e a validação das informações do formulário utiliza a biblioteca Yup. (em andamento)',
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
  }
]

export default projectsData
