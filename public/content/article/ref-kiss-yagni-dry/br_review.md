# Princípios de Design de Arquitetura de Software: KISS, YAGNI, DRY

Traduzido por Bruno Foggia, 2026.

> Neste artigo, vamos aprender sobre os Princípios de Design de Arquitetura de Software: KISS, YAGNI e DRY.

## Introdução — Princípios de Design de Arquitetura de Software

Na indústria de software, recebemos projetos dos mais simples aos **mais complexos** de nossos clientes. No entanto, é comum cairmos na **armadilha de projetar sistemas mais complexos do que o necessário.** Portanto, antes de começarmos a projetar, é bom revisar os princípios de design que podemos aplicar em qualquer projeto. Esses princípios são:

- DRY
- KISS
- YAGNI

Vamos ver os detalhes.

## Princípio DRY

**DRY** significa **"Don't Repeat Yourself"** (Não Se Repita). No livro 'The Pragmatic Programmer', encontramos a seguinte definição para DRY:

> Todo conhecimento deve ter uma representação única, sem ambiguidades e autoritativa dentro de um sistema. Isso significa que você deve manter o comportamento de uma funcionalidade do sistema em um único trecho de código — não deve haver código ou elemento de design duplicado.

Como estamos analisando esses princípios sob a ótica do design de sistemas, seguiremos os mesmos conceitos do desenvolvimento de software. É mais fácil manter um código ou sistema que existe em apenas um lugar, pois se for necessário alterar algo, a mudança precisa ocorrer em um único ponto.

Além disso, se o mesmo código existir em dois ou mais lugares, ele pode divergir ao longo do tempo, gerando bugs no sistema. Código duplicado também torna o código mais complexo e desnecessariamente maior.

## Princípio KISS

**KISS** significa **"Keep It Simple, Stupid"** (Mantenha Simples, Estúpido). Este princípio prega que seu código ou sistema deve ser simples. Complexidade desnecessária deve ser evitada. Um código simples é mais fácil de manter e de entender.

Você pode aplicar este princípio tanto no design quanto na implementação do código. Deve-se eliminar código duplicado, remover funcionalidades desnecessárias, usar nomes para APIs e métodos que façam sentido e correspondam às suas responsabilidades.

Também é preciso separar as responsabilidades das suas aplicações e as responsabilidades das camadas dos sistemas. A maioria dos sistemas funciona melhor quando mantida simples em vez de ter designs complexos; portanto, a simplicidade deve ser um objetivo central no design e a complexidade desnecessária deve ser evitada.

## Princípio YAGNI

**YAGNI** significa **"You Ain't Gonna Need It"** (Você Não Vai Precisar Disso). Às vezes, tentamos pensar muito à frente, no futuro do projeto, adicionando funcionalidades extras "caso precisemos delas".

> Isso é Errado! Não precisamos disso e, na maioria dos casos, podemos dizer YAGNI = "You Aren't Gonna Need It".

É um princípio da metodologia de desenvolvimento de software **Extreme Programming (XP).** Essa metodologia defende **"Faça a Coisa Mais Simples Que Possa Funcionar".** Este princípio diz que você não deve criar funcionalidades que não sejam realmente necessárias. Ele é similar ao princípio **KISS** — ambos buscam soluções mais simples.

A diferença entre eles é que o **YAGNI** foca em remover funcionalidades e lógicas desnecessárias, enquanto o **KISS** foca na complexidade. Com esses princípios, você economiza tempo e consegue avançar nos projetos com mais eficiência.

## O Que Vem a Seguir?

- Artigo original: [Software Architecture Design Principles: KISS, YAGNI, DRY](https://medium.com/design-microservices-architecture-with-patterns/software-architecture-design-principles-kiss-yagni-dry-341ce969212c)
- [Arquitetura Monolítica em Alta](https://medium.com/design-microservices-architecture-with-patterns/monolithic-architecture-is-shining-fa4920a4660c)
- [De Macro-serviços a Nano-serviços: Evolução da Arquitetura de Software](https://medium.com/design-microservices-architecture-with-patterns/macro-services-to-nano-services-evolution-of-software-architecture-424f927b63cb)
- [Arquitetura de Microsserviços: Problemas e Soluções com Padrões e Princípios](https://medium.com/design-microservices-architecture-with-patterns/microservices-architecture-problems-and-solutions-with-pattern-and-principles-b673f342dc10)

## Referências

- Artigo original: [Software Architecture Design Principles: KISS, YAGNI, DRY](https://medium.com/design-microservices-architecture-with-patterns/software-architecture-design-principles-kiss-yagni-dry-341ce969212c)
