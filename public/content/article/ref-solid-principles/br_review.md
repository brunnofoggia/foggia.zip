# Os Princípios S.O.L.I.D em Imagens

Traduzido por Bruno Foggia, 2026.

![Ilustração SOLID](./img/solid-1.png)

> Todas as ilustrações neste artigo são de [Ugonna Thelma](https://medium.com/u/139892399b5e)

Se você está familiarizado com [Programação Orientada a Objetos](https://en.wikipedia.org/wiki/Object-oriented_programming), então provavelmente já ouviu falar dos princípios [SOLID](https://en.wikipedia.org/wiki/SOLID).

Esses cinco princípios de desenvolvimento de software são diretrizes a serem seguidas ao construir software para que ele seja mais fácil de escalar e manter. Eles foram popularizados pelo engenheiro de software [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin).

Existem muitos ótimos artigos online sobre **SOLID**, mas raramente vejo exemplos com imagens. Isso torna um pouco difícil para aprendizes visuais como eu aprender mantendo o engajamento.

Então o principal objetivo deste artigo é obter uma melhor compreensão desses princípios usando ilustrações e enfatizando o objetivo de cada princípio.

<mark>Veja, alguns desses princípios podem parecer similares, mas não têm o mesmo objetivo. É possível satisfazer um princípio enquanto viola o outro, mesmo que sejam parecidos.</mark>

Para tornar isso o mais simples possível de acompanhar, usarei a palavra **"Classe"**, mas note que ela também pode se aplicar a uma **Função**, **Método** ou **Módulo** neste artigo.

> Atualização\*
>
> Recebi alguns comentários sobre o Open-Closed neste artigo violar o Princípio da Responsabilidade Única. Por favor, note que o objetivo deste artigo é explicar cada um desses princípios de forma independente dos outros.
>
> Além disso, Responsabilidades (ou Papéis) são diferentes de Ações. No SRP, usei "Eu sou Pintor", no Open-Closed, usei "Eu sei Pintar".
>
> É importante notar isso porque várias ações podem ser realizadas para cumprir uma responsabilidade (ou papel). A classe deve ter uma responsabilidade (SRP), mas sua funcionalidade que cumpre essa responsabilidade deve estar aberta para extensão (OCP).

Agora, vamos começar!

## Os Princípios SOLID

### S — Responsabilidade Única (Single Responsibility)

> Uma classe deve ter uma única responsabilidade

![responsabilidade única](./img/solid-2.png)

<mark>Se uma Classe tem muitas responsabilidades</mark>, isso aumenta a possibilidade de bugs porque fazer alterações em uma de suas responsabilidades pode afetar as outras sem que você saiba.

#### Meta

Este princípio visa separar comportamentos para que, se bugs surgirem como resultado da sua alteração, eles não afetem outros comportamentos não relacionados.

---

### O — Aberto-Fechado (Open-Closed)

> Classes devem ser abertas para extensão, mas fechadas para modificação

![aberto-fechado](./img/solid-3.png)

Alterar o comportamento atual de uma Classe afetará todos os sistemas que usam essa Classe.

Se você quer que a Classe execute mais funções, a abordagem ideal é adicionar às funções que já existem, NÃO alterá-las.

#### Meta

Este princípio visa estender o comportamento de uma Classe sem alterar o comportamento existente dessa Classe. Isso para evitar causar bugs em qualquer lugar onde a Classe esteja sendo usada.

---

### L — Substituição de Liskov (Liskov Substitution)

> Se S é um subtipo de T, então objetos do tipo T em um programa podem ser substituídos por objetos do tipo S sem alterar nenhuma das propriedades desejáveis desse programa.

![substituição de Liskov](./img/solid-4.png)

Quando uma Classe **filha** não consegue realizar as mesmas ações que sua Classe **pai**, isso pode causar bugs.

Se você tem uma Classe e cria outra Classe a partir dela, ela se torna **pai** e a nova Classe se torna **filha**. A Classe **filha** deve ser capaz de fazer tudo o que a Classe **pai** pode fazer. Esse processo é chamado de **Herança**.

A Classe **filha** deve ser capaz de processar as mesmas requisições e entregar o mesmo resultado que a Classe **pai** ou entregar um resultado que seja do mesmo tipo.

A imagem mostra que a Classe **pai** entrega Café (pode ser qualquer tipo de café). <mark>É aceitável que a Classe **filha** entregue Cappuccino porque é um tipo específico de Café, mas NÃO é aceitável entregar Água.</mark>

Se a Classe **filha** não atende a esses requisitos, significa que a Classe **filha** foi completamente alterada e viola este princípio.

#### Meta

Este princípio visa garantir consistência para que a Classe pai ou sua Classe filha possam ser usadas da mesma forma sem erros.

---

### I — Segregação de Interface (Interface Segregation)

> Clientes não devem ser forçados a depender de métodos que não utilizam.

![segregação de interface](./img/solid-5.png)

Quando uma Classe é obrigada a realizar ações que não são úteis, isso é desperdício e pode produzir bugs inesperados se a Classe não tiver a capacidade de realizar essas ações.

<mark>Uma Classe deve realizar apenas as ações necessárias para cumprir seu papel.</mark> Qualquer outra ação deve ser removida completamente ou movida para outro lugar se puder ser usada por outra Classe no futuro.

#### Meta

<mark>Este princípio visa dividir um conjunto de ações em conjuntos menores para que uma Classe execute APENAS o conjunto de ações que ela necessita.</mark>

---

### D — Inversão de Dependência (Dependency Inversion)

> - Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
> - Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

![inversão de dependência](./img/solid-6.png)

Primeiramente, vamos definir os termos usados aqui de forma mais simples

**Módulo (ou Classe) de alto nível**: Classe que executa uma ação com uma ferramenta.

**Módulo (ou Classe) de baixo nível**: A ferramenta necessária para executar a ação.

**Abstração**: Representa uma interface que conecta as duas Classes.

**Detalhes**: Como a ferramenta funciona.

Este princípio diz que uma Classe não deve estar fundida com a ferramenta que usa para executar uma ação. Em vez disso, ela deve estar fundida à interface que permitirá que a ferramenta se conecte à Classe.

Ele também diz que tanto a Classe quanto a interface não devem saber como a ferramenta funciona. No entanto, a ferramenta precisa atender à especificação da interface.

#### Meta

Este princípio visa reduzir a dependência de uma Classe de alto nível em relação à Classe de baixo nível, introduzindo uma interface.

---

## Recursos

Artigo original: [The S.O.L.I.D Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
