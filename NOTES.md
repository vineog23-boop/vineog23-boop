# Manutenção do perfil

O README apresenta a trajetória de Vinícius Oliveira em backend Java e os projetos que sustentam o portfólio.

## Critérios de apresentação

- Destacar problema, implementação e contexto acadêmico ou pessoal.
- Manter formação e contatos consistentes.
- Separar tecnologias praticadas de assuntos em estudo.
- Descrever limitações de projetos em desenvolvimento.
- Conferir afirmações contra código, configurações e testes; evitar métricas de qualidade sem evidência.

## Projetos em destaque

| Projeto | Papel no portfólio |
| --- | --- |
| [GastroHub](https://github.com/vineog23-boop/gastrohub) | Entrega em equipe da FIAP, com usuários, endereços, JWT, documentação e testes. |
| [Medflow](https://github.com/vineog23-boop/Medflow) | Projeto pessoal de pacientes e exames, com infraestrutura ainda em evolução. |
| [Lanchonete API](https://github.com/vineog23-boop/lanchonete-api) | CRUD em camadas com H2 em memória e documentação OpenAPI. |
| [Java Studies Portfolio](https://github.com/vineog23-boop/java-studies-portfolio) | Fundamentos e exercícios de Java. |

As seleções deste README são independentes dos repositórios fixados na interface do GitHub.

Ordem recomendada de fixação: GastroHub, Medflow, Lanchonete API e Java Studies Portfolio. Projetos em estágio inicial ficam em “Mais projetos e fundamentos”.

Revisão de 12/09/2026: as descrições curtas (About) são editadas separadamente dos READMEs. Textos recomendados:

| Repositório | Descrição curta |
| --- | --- |
| Medflow | API em desenvolvimento para pacientes e ordens de exame, com Java, Spring Boot, paginação, validações e testes. Infraestrutura e mensageria em evolução. |
| lanchonete-api | API REST de lanchonete com Java, Spring Boot, JPA e H2 em memória. CRUD de clientes, endereços, produtos, pedidos e entregadores. |
| gestao-vagas | API de estudo com Java, Spring Boot, JPA e H2 para cadastrar, listar e atualizar o nome de candidatos. |
| locatech-api | Estudo inicial de locação de veículos com Java, Spring Boot, JDBC e H2. Modelagem e estrutura em desenvolvimento. |

Na revisão, esses campos e a ordem de fixação ainda não haviam sido alterados: a conexão utilizada oferece edição de arquivos, mas não desses campos.

## Animações

O workflow [profile-animations.yml](.github/workflows/profile-animations.yml) gera Galaga e cobrinha diariamente às 06:17 UTC, com opção de execução manual. As execuções agendadas podem atrasar.

- Galaga usa a biblioteca de [abozanona](https://github.com/abozanona/pacman-contribution-graph), fixada por commit.
- A cobrinha usa [Platane/snk](https://github.com/Platane/snk), fixado por commit.
- O gerador usa o proprietário do repositório como fonte das contribuições.
- As quatro imagens ficam em `assets/activity/`, com versões clara e escura.
- O workflow só adiciona esses quatro arquivos ao commit automático.
- Os arquivos gerados não disparam novas gerações por push.

Os SVGs são animações: não são jogos controláveis pelo visitante. Contribuições incluem outras atividades além de commits.

## Arquivos visuais

O cabeçalho usa `assets/profile-motion-light.svg` e `assets/profile-motion-dark.svg`, com nome e stack fixos e um fluxo ilustrativo entre cliente, API Java e banco de dados. Os traços turquesa representam a ida da requisição/consulta e os azuis, o retorno. O desenho não representa uma integração ao vivo nem a arquitetura específica de um repositório. `prefers-reduced-motion` mantém uma versão estática para quem prefere reduzir animações. Os ícones estão em `assets/icons/`, com a licença original preservada. Cards externos de commits e linguagens ficam visíveis por padrão em Código e colaboração. Apenas a versão cobrinha fica em uma seção expansível.

## Atualização da documentação

Ao mudar porta, banco, versão de framework ou endpoint em um projeto, revise seu README na mesma entrega. Registros históricos devem indicar data e apontar para a documentação atual.
