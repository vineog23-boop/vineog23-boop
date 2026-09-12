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
| [Java Studies Portfolio](https://github.com/vineog23-boop/java-studies-portfolio) | Fundamentos e exercícios de Java. |

As seleções deste README são independentes dos repositórios fixados na interface do GitHub.

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

O cabeçalho tipográfico usa `assets/profile-heading-light.svg` e `assets/profile-heading-dark.svg`, com fade-in e versões para os dois temas. Os SVGs foram gerados com [capsule-render](https://github.com/kyechan99/capsule-render), e sua licença está em `assets/heading-LICENSE`. Os ícones estão em `assets/icons/`, com a licença original preservada. Cards externos de estatísticas ficam em uma seção expansível.

## Atualização da documentação

Ao mudar porta, banco, versão de framework ou endpoint em um projeto, revise seu README na mesma entrega. Registros históricos devem indicar data e apontar para a documentação atual.
