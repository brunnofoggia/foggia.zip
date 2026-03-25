# Por favor, repita-se (DRY está morto)

Traduzido por Bruno Foggia, 2026.

> Antes de mais nada, me desculpe pelo título clickbait, mas precisamos conversar sobre o princípio Don't Repeat Yourself (DRY - Não Se Repita).

## História 1

Alguns anos atrás, fomos convidados a ajudar no desenvolvimento de uma plataforma existente na indústria de blockchain. Era um produto direcionado a traders que os ajudava a automatizar declarações de impostos. E era o maior projeto baseado em copiar e colar que eu já vi na minha vida.

Foi escrito em PHP. Se você conhece PHP, sabe que cada arquivo .php funciona como um ponto de entrada para o seu código — e a partir daí você geralmente importa (inclui) utilitários, bibliotecas que são comuns ao seu projeto. Isso se você não usar um framework. Esse projeto não usava.

Este projeto foi criado do zero pelo seu fundador, que aprendeu programação enquanto criava e mantinha este produto.

Ele não tinha muito conhecimento de programação antes e não conhecia todas essas boas práticas e regras sofisticadas que temos. Então cada arquivo .php era uma cópia do anterior com as modificações necessárias para a rota/view específica. Toneladas de código repetido.

E aqui está o que é realmente importante: **neste ponto, o produto já tinha faturado milhões de dólares.**

Deixe isso assentar. Nenhuma quantidade de código copiado, repetição e o que chamaríamos de "código de baixa qualidade" impediu o produto de ser bem-sucedido.

Além disso, conseguimos identificar bem rapidamente o código repetido e introduzir as abstrações corretas porque já conhecíamos os diferentes casos de uso a partir do código duplicado.

**Mas por favor, esteja ciente de que não estou defendendo esse tipo de desenvolvimento. É um exemplo EXTREMO mostrando que você não precisa ser perfeccionista.**

## História 2

Conheci desenvolvedores que viviam para não se repetir. Acho que em algum momento eles foram de "em geral é melhor não ter muita repetição" para "se você repetir qualquer código, vai queimar no inferno". Esta é uma dessas histórias.

Estávamos trabalhando em uma empresa que tinha múltiplos produtos relacionados. E algo que um dos desenvolvedores fez me surpreendeu. Ele estava trabalhando em uma nova aplicação e decidiu que poderia usar uma função de duas linhas do projeto anterior (3 linhas se contar a definição da função).

A escolha aqui era simples — apenas copiar essas 3 linhas de código para o novo projeto. Mas como muitos desenvolvedores pensam — incluindo este — "repetição é a raiz de todo mal em software". **Então ele gastou dois dias configurando uma biblioteca compartilhada (incluindo processo de deploy etc.) apenas para não duplicar 3 linhas de código.**

Agora pergunte a si mesmo como isso beneficia o projeto e como nos aproxima de entregar nossos objetivos.

## A fonte de todo mal

Simplesmente pesquisando "Don't repeat yourself" no Google, aprendi que:

- Repetição é a raiz de todo mal em software
- Duplicação é desperdício
- Se você faz isso, não entende como aplicar abstrações
- Diminui a qualidade do código
- Tudo deve ser eliminado

Parece uma má ideia, certo? Mas a esse ponto **parece que estamos demonizando isso.** Parece que se você faz isso, é um mau desenvolvedor! Como se não houvesse nenhum cenário onde você deveria fazer isso. **Mas vocês todos usam StackOverflow, não é?**

Você em algum momento fez a si mesmo uma pergunta simples — é realmente **TÃO** ruim assim copiar e colar um pouco de código? **Isso tem algum benefício?**

## Apenas um Sith lida em absolutos

A questão é a seguinte — cada regra em desenvolvimento de software faz sentido no máximo 80% do tempo. Cada uma foi cunhada em algum contexto específico — para o qual fazia sentido. Mas esse contexto se perdeu na tradução e algumas pessoas começaram a **seguir a regra religiosamente em vez de tratá-la como uma regra geral.**

A culpa é nossa. Fazemos esses princípios **soarem tão absolutos.** Don't repeat yourself significa não se repita. Então é passado de uma pessoa para outra, copiado em blogs, livros repetidamente até que se torna a verdade e todo o contexto e toda a nuance se perdem.

Então aqui está uma alternativa que acho que alguns de vocês deveriam tentar:

> Tente não se repetir demais. Mas às vezes você pode. Porque às vezes pode fazer sentido.

Não é uma frase tão cativante, porém.

## Por favor, repita-se

Este desabafo já está ficando longo demais para o meu gosto, então vamos ao ponto. Há inúmeros casos onde se repetir não é apenas **não um antipadrão, mas na verdade é uma ferramenta.**

Eu adoro me repetir. Especialmente quando estou escrevendo testes. Eu copio testes por todo lugar e mudo o que é necessário para o teste em questão. Isso resulta em muita duplicação. Quando termino, simplesmente passo por esses testes e vejo qual é a melhor forma de reduzir (não eliminar completamente) a repetição e o que pode ser extraído em abstrações separadas.

Eu poderia gastar muito tempo antecipadamente para descobrir como quero configurar os testes, quais helpers preciso, depois refazer tudo porque acontece que 2 de 25 testes precisam de uma configuração um pouco diferente. Mas por que eu faria isso se posso simplesmente ver para onde o código me leva? Por que não ver o que é realmente necessário em vez de fazer toda essa adivinhação?

Isso não é apenas para testes, mas testes são onde isso é mais óbvio e eu encorajaria você a começar por aí.

O uso excessivo de **DRY (Don't Repeat Yourself)** é um antipadrão em si. A remoção excessiva de duplicação leva a abstrações ruins porque o desenvolvedor **está criando abstrações imaginárias em vez de descobrir as reais.**

**Repetir-se é basicamente dar a si mesmo o tempo e o espaço para criar as abstrações corretas** em vez de se envolver em adivinhação e clarividência. Não sabemos como será o código futuro. Não entendemos todos os casos de uso de início ou as formas como nosso código será usado. Se introduzirmos abstrações cedo demais, no melhor dos casos acabamos reescrevendo tudo.

**Repetir-se é uma ótima ferramenta para descobrir abstrações.**

## O que outras pessoas dizem

Como você deve ter adivinhado, não sou a primeira pessoa a notar isso. Há dois ótimos artigos sobre este tema:

- [AHA Programming](https://kentcdodds.com/blog/aha-programming) por Kent C. Dodds
- [The Wrong Abstraction](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) por Sandi Metz

Você definitivamente deveria lê-los, pois eles complementam este artigo muito bem e vão te dar mais compreensão sobre quando usar duplicação. Aqui estão alguns trechos:

> "duplicação é muito mais barata do que a abstração errada"
>
> "prefira duplicação à abstração errada"
>
> — Sandi Metz, "The Wrong Abstraction"
>
> "Evite Abstrações Apressadas"
>
> "Otimize para mudança primeiro"
>
> "a grande lição sobre AHA Programming é que você não deveria ser dogmático sobre quando começa a escrever abstrações, mas sim escrever a abstração quando parecer certo e não ter medo de duplicar código até chegar lá."
>
> — Kent C. Dodds, "AHA Programming"

## Conclusão

Quero deixar claro que não estou te convidando a fazer bagunça. Estou apontando que algum nível de duplicação temporária é saudável. A primeira história deveria te mostrar que, apesar do que você possa pensar, o sucesso de um produto não depende disso, mas sim do desenvolvimento do negócio.

Então copie código e modifique quando necessário para se dar espaço e poder descobrir abstrações reais em vez de imaginárias. Claro — esse não é o único método para descobrir melhores abstrações. Conversar com stakeholders e entender melhor o negócio é outra forma que discutiremos no futuro. Mas não é uma situação onde você precisa escolher um ou outro, são métodos complementares.

Há muitas regras gerais em desenvolvimento de software — ou "boas práticas". Geralmente elas funcionam quando você entende o contexto e as aplica com bom senso. Infelizmente há muito dogma na indústria de software, ela é movida por hype e emoções e raramente por pragmatismo. Então lembre-se de que essas "boas práticas" não são "tudo ou nada", mas mais um "tente fazer mais isso do que aquilo e você ficará bem".

## Recursos

- Artigo original: [Please do repeat yourself (DRY is dead)](https://dev.to/ralphcone/please-do-repeat-yourself-dry-is-dead-1jbg)
