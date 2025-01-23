# Projeto: Brinquedos de Miriti

## Descrição
Este projeto tem como objetivo promover o artesanato tradicional de miriti em Abaetetuba, conectando artesãos e clientes por meio de uma plataforma digital. Aqui estão os objetivos principais e as tarefas distribuídas por grupo, com uma abordagem prática para cada uma.

---

## Tarefas por Grupo

### Grupo 1: Informações e API
- [ ] Implementar página de informações dos produtos  
  Branch: `feature/product-page`  
  Pensamento Prático:
  Concentrar-se em criar uma página funcional e visualmente atraente, priorizando as informações mais relevantes (nome, preço, descrição). Utilize mockups para testes iniciais e integre a API gradualmente para evitar erros.

- [ ] Implementar perfil dos artesãos  
  Branch: `feature/artisan-profile`  
  Pensamento Prático:
  Exibir os detalhes mais importantes de forma intuitiva (foto, bio e produtos). Pense em como os usuários vão navegar e interagir com o perfil. Priorize a funcionalidade antes de se preocupar com estilos avançados.

- [ ] Conectar à API  
  Branch: `feature/connect-api`  
  Pensamento Prático:
  Centralize todas as chamadas da API em um único arquivo ou serviço para facilitar manutenção e testes. Use logs para depurar as conexões e sempre valide os dados recebidos antes de utilizá-los.

---

### Grupo 2: Ajustes e Interações
- [ ] Corrigir erros de simetria nos componentes e tela  
  Branch: `fix/layout-issues`  
  Pensamento Prático:
  Verifique visualmente cada componente para detectar inconsistências. Use ferramentas como o DevTools para ajustar margens e paddings. Garanta que os ajustes melhorem a experiência em dispositivos menores.

- [ ] Adicionar seção de parceiros  
  Branch: `feature/partners-section`  
  Pensamento Prático:
  Comece simples, com uma lista de parceiros, e adicione estilos progressivamente. Pense em como o design pode destacar os parceiros sem desviar a atenção do conteúdo principal.

- [ ] Adicionar interações CSS nos componentes  
  Branch: `feature/css-interactions`  
  Pensamento Prático:
  Concentre-se em interações que melhorem a experiência do usuário, como mudanças de cor ou leve ampliação em hover. Teste as interações com teclado para acessibilidade.

---

### Grupo 3: Produtos e Paginação
- [ ] Implementar rolagem e paginação infinita dos produtos  
  Branch: `feature/infinite-scroll`  
  Pensamento Prático:
  Inicie implementando uma paginação simples para garantir que os dados sejam carregados corretamente. Depois, integre o `IntersectionObserver` ou biblioteca para rolagem infinita. Teste com muitos dados para evitar travamentos.

---

### Grupo 4: Busca
- [ ] Implementar buscas  
  Branch: `feature/search`  
  Pensamento Prático:
  Comece criando um campo de busca funcional. Adicione filtros apenas após garantir que a busca básica está estável. Use debounce para evitar chamadas excessivas à API e melhorar a performance.

---

## Sugestão de Fluxo de Trabalho
1. Criar Branches: Para cada tarefa, crie uma branch baseada em `main` usando o padrão sugerido (ex.: `feature/search`).
2. Commits: Use mensagens de commit claras e descritivas (ex.: `feat: adicionar barra de busca com debounce`).
3. Pull Requests: Ao finalizar uma tarefa, abra um pull request para revisão e siga o padrão de nome `Implementa [nome da tarefa]`.