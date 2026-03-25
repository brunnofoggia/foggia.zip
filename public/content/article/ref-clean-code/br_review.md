# Clean Code — Uma abordagem prática

Traduzido por Bruno Foggia, 2026.

Depois de dar algumas palestras sobre Clean Code, decidi resumir os pontos mais importantes em um artigo. Como existe muita informação e muitos posts na internet sobre Clean Code, acho que um novo artigo simplesmente explicando alguns princípios não seria muito valioso.

Neste artigo vou tentar te dar uma abordagem prática do Clean Code. Não vou me aprofundar na teoria, **quero mostrar como eu escrevo Clean Code**.

## O que é Clean Code e por que devemos nos importar?

### Origem e definição

Existem vários livros e desenvolvedores experientes falando sobre código limpo na comunidade.

Eu construí uma espécie de **definição de Clean Code** juntando as opiniões de vários autores e fontes, e o que obtive é que Clean Code tem estas características:

- É **importante**, pelo menos tão importante quanto outros conceitos como performance, cobrir a funcionalidade, evitar bugs, …
- É **fácil** para qualquer desenvolvedor **ler**.
- É **fácil** para qualquer desenvolvedor **modificar**.
- Foi escrito por alguém que **se importa** com ele.
- Faz o que é esperado. O código não te engana, sem surpresas.

### Por que você deveria escrever código limpo

Eu realmente acredito que escrever Clean Code é importante porque é o primeiro passo para cobrir o principal objetivo de qualquer arquitetura: **minimizar o esforço humano necessário para criar e manter o sistema desejado.**

Quando estamos codando, **nós** costumamos **gastar mais tempo** (muito mais tempo) **lendo código do que escrevendo**. Lemos código legado, código de bibliotecas, código de colegas de equipe, código escrito por você meses atrás (que você não lembra), código escrito por alguém que saiu da empresa, código no Stack Overflow…

> > > # "De fato, a proporção de tempo gasto lendo versus escrevendo é bem superior a 10 para 1"

Levando isso em consideração, não vale a pena um pequeno esforço extra na escrita? **Você vai recuperar várias vezes o tempo extra que gastou limpando seu código.** Pense nisso na próxima vez que for commitar um trecho de código.

Um último pensamento sobre por que devemos cuidar do nosso código é que nós, os desenvolvedores, não escrevemos código apenas para ser interpretado por máquinas. **Escrevemos código para ser lido por humanos**. Vamos pensar que **somos autores**, da mesma forma que um jornalista escreve em um jornal ou um escritor cria um romance.

## Alguns princípios

Existem muitos princípios e ideias sobre o que é limpo e o que não é. Você pode encontrá-los no livro e também na internet. Mas como preciso de alguns princípios básicos para ter com o que trabalhar, vou apresentar alguns deles. Se você já os conhece, pode pular para a próxima seção; se não, acho que eles vão te dar uma ideia do estilo do restante da teoria e, talvez, a motivação para conhecer mais.

Então, vamos ver alguns princípios com código.

### Nomenclatura

Estamos **decidindo nomes** em todo lugar quando estamos codando: **variáveis, funções, classes, pacotes, arquivos…** Levar isso a sério é um primeiro passo para ter Clean Code.

Algumas dicas para ter nomes limpos:

- Use **nomes que revelem a intenção**:

```javascript
// Ruim
const s; // tamanho do arquivo

// Bom
const sizeOfTheFile;
const fileSizeInBytes;
```

- Escolha nomes pronunciáveis:

```javascript
// Ruim
const gntmstmp;

// Bom
const generationTimestamp;
```

- Use nomes pesquisáveis:

```javascript
// Ruim
for (let i = 0; i < 10; i++) {
  s += r[i] / 50;
}

// Bom
for (let i = 0; i < MATCHES_PER_PERSON; i++) {
  averageViewers += assistsPerGame[i] / MATCHES_PER_PERSON;
}
```

> Se você tentar encontrar a variável "r" com a ferramenta de busca da sua IDE, provavelmente vai encontrar mais do que gostaria

- Evite prefixos, sufixos e abreviações:

```javascript
// Ruim
const hp;

// Bom
const hitPoints;
```

> O que diabos é 'hp': hipotenusa, ponto alto…? Falantes de português poderiam ter ainda mais propostas.

Existem muitas outras dicas sobre escolher bons nomes. Provavelmente usar nomes que revelem a intenção é a mais importante, mas o que realmente importa é **levar a nomenclatura a sério.**

**Reserve um tempo para escolher bons nomes.** E não tenha medo de **mudar um nome existente** se achar que o código vai ficar mais legível após a mudança.

### Funções

Entre todas as ideias sobre funções limpas, vou destacar três para este post.

- A primeira regra é básica e fácil de lembrar: **Funções devem fazer uma coisa só**, devem fazê-la bem e devem fazer somente isso. Não há muito o que explicar aqui: evite efeitos colaterais, divida suas funções se perceber que estão fazendo várias coisas ao mesmo tempo.

- Funções **devem ser pequenas.** Ok, mas quão curtas devem ser? Como medir isso? Vamos forçar nossas funções a terem **no máximo 2 níveis de indentação.** Se isso for difícil para você, pode começar definindo um limite mais alto (3 níveis, por exemplo), mas por favor coloque um limite nos níveis de indentação que você permite.

- Sobre os argumentos… **Quanto menos argumentos uma função tiver, mais limpa ela é.** Por quê? Argumentos exigem muito conhecimento de contexto. Em cada chamada, um leitor precisa ter contexto para entender cada argumento. Mais argumentos → mais contexto necessário para entender. Argumentos também são difíceis do ponto de vista de testes. Mais argumentos, mais casos de teste para garantir que todas as combinações de argumentos funcionem corretamente.

| Argumentos | Limpeza                          |
| ---------- | -------------------------------- |
| 0          | Ok                               |
| 1          | Ok                               |
| 2          | Ok                               |
| 3          | Deve ser evitado quando possível |
| > 3        | Inaceitável                      |

> Você precisa ter um bom motivo para ter mais de 2 argumentos em uma função

### Comentários

Quando aprendi a programar nos anos 90, meus professores costumavam pedir para eu escrever comentários em todo lugar. Era típico ouvi-los dizer coisas como "Se você não comentar seu código, não vou corrigir sua prova…". O objetivo desses comentários era tornar nosso código mais fácil de ler. Esse é um objetivo que também temos ao escrever Clean Code, mas talvez comentários não sejam a melhor forma de alcançá-lo.

**Comentários mentem**, e tenho certeza de que todos nós já encontramos comentários antigos dizendo algo desatualizado. Porque o código é mantido, mas **não há nada que obrigue os comentários a serem mantidos** também. Existe algo pior do que um comentário falso?

**A verdade está apenas no código.** Quando você achar que precisa escrever um comentário, sempre pense se não há uma **forma melhor de expressar isso usando o código.**

A ideia mais importante é tentar **evitar comentários para explicar o código.** Por exemplo:

- Evite comentários para explicar uma variável. Em vez disso, escolha um bom nome para essa variável e você não precisará de um comentário
- Evite comentários para explicar uma função. Em vez disso, force sua função a fazer uma coisa só, ter poucos argumentos e escolha um bom nome para ela e seus argumentos, e você não precisará de um comentário

#### Vamos ver um caso prático:

1. Temos algo complexo. Sentimos que vai ser difícil de entender no futuro:

```javascript
if (date.year % 4 === 0 || (date.year % 100 !== 0 && date.year % 400 === 0))
```

> O que está acontecendo aqui? Você entendeu? Legal, mas talvez não seja trivial para todos

2. Podemos adicionar um comentário para tornar mais fácil de entender:

```javascript
// Verificar se o ano é bissexto
if (date.year % 4 === 0 || (date.year % 100 !== 0 && date.year % 400 === 0))
```

> Coloquei um comentário. Agora posso dormir melhor. Mas, essa é a melhor solução?

3. Vamos tentar outra opção, vamos extrair o código complexo para um método com um bom nome:

```javascript
if (date.happensInLeapYear())
```

> Definitivamente agora está limpo!

Pense no que um futuro **leitor vai querer saber** quando encontrar esse `if`. Ele vai se interessar em saber que esse `if` está verificando se o ano é bissexto, mas provavelmente **não vai se interessar em como** estamos calculando isso. Se tiver curiosidade, pode navegar até a implementação desse método com um bom nome. Sem querer, **ao evitar um comentário estamos separando diferentes níveis de abstração** no nosso código.

Então, em geral, evite comentários para explicar código. E, como você vai estar usando GIT ou qualquer outro sistema de controle de versão distribuído, evite código comentado (delete!), atribuições e assinaturas, e esse tipo de coisa.

Comentários não são proibidos, há situações onde comentários fazem sentido:

- Comentários legais
- Comentários TODO
- Amplificações sobre a importância de algo ou a razão de uma decisão concreta no código
- Comentários obrigatórios (JavaDocs, …) em APIs públicas (mas evite isso em código não público… não force uma equipe a comentar todas as funções de todas as suas classes!!!)

### Mais princípios

Como disse antes, ia comentar apenas alguns princípios para ter uma compreensão básica da teoria do Clean Code. Então, essas são apenas algumas das ideias mais básicas sobre Clean Code. Se você achá-las interessantes e quiser saber mais, procure mais recursos na internet.

## Como limpar seu código? Refatoração é a chave

Bem, boa nomenclatura, funções pequenas, sem comentários para explicar o código… entendi. Mas como posso fazer isso? Como posso escrever código seguindo essas ideias?

Nosso trabalho é difícil por si só. Escrever código e fazê-lo funcionar já pode ser desafio suficiente. E isso sem se preocupar em deixá-lo limpo.

Então, a palavra-chave aqui pode ser Refatoração. Uma boa forma pode ser **escrever código sem se preocupar muito com limpeza**, e **depois**, quando tivermos o código fazendo o que queremos, **limpá-lo com uma refatoração.**

### Definição de Refatoração

Refatoração de código é o processo de **reestruturar** código existente **sem alterar** seu comportamento externo. Isso significa que o código antes e depois da refatoração deve fazer exatamente a mesma coisa.

Coisas que NÃO são refatorações:

- Mudar um algoritmo
- Substituir um tipo de loop por outro
- Melhorar a performance de um trecho de código

Coisas que SÃO refatorações:

- Extrair um trecho de código para uma Função
- Renomear coisas
- Extrair várias funções para uma nova Classe
- Criar uma constante para armazenar um valor hardcoded
- ...

### Refatoração Segura

Talvez você esteja pensando "Não quero quebrar o código, está funcionando bem!". Sim, claro. Pode ter sido bastante difícil fazer o **código funcionar, não queremos quebrá-lo** ao **refatorar.** E essa é a razão típica que as pessoas argumentam para não alterar código muito ruim. Mas não se preocupe, existe um caminho seguro.

Podemos contar com duas coisas para **refatorar sem medo:** Testes + Ferramentas de refatoração.

> Refatorar pode ser um prazer se tivermos bons testes e usarmos boas ferramentas de refatoração

- **Testes**: devemos ter bons testes automatizados para nosso código por muitas razões. Mas é óbvio que isso é algo que vai nos ajudar a refatorar sem quebrar nada. **Após** cada **refatoração** você pode verificar se todos os **testes continuam verdes**. Não vou escrever sobre testes neste post, talvez em outro no futuro. **Se você não sabe sobre testes, deveria.** Há muita informação na internet. Se não sabe por onde começar, me pergunte :).

![Testes Automatizados - Tudo Verde](./img/tests.png)

> Tudo verde. Parece que não quebramos nada.

- **Ferramentas de refatoração**: IDEs modernas têm ferramentas que fazem algumas das **ações de refatoração mais comuns automaticamente**. Se as usarmos, estaremos reduzindo as possibilidades de quebrar algo ao fazer alterações no código. Vou apresentá-las no final deste post ;).

### Quando você deve refatorar seu código?

O tempo todo. Quero dizer, você deveria estar trabalhando em ciclos de desenvolvimento de:

- Escrever código
- Escrever testes
- Refatorar

E não necessariamente nessa ordem. Você pode desenvolver usando TDD e, nesse caso, vai escrever seus testes antes do código. Mas de qualquer forma, **você deveria refatorar cada vez que tiver um trecho de código funcionando.** Em outras palavras: você deveria refatorar ao final de cada ciclo. E **esses ciclos devem ser pequenos.**

Porque se você trabalha dentro de uma pequena iteração de desenvolvimento, será muito fácil refatorar, garantir que tudo está limpo, que você não está quebrando coisas, etc… Você costuma passar vários dias escrevendo para acabar fazendo uma entrega com muitas linhas de código em vários arquivos? Talvez não seja o melhor hábito.

## Apêndice: Ferramentas de refatoração

Para este apêndice escolhi uma IDE com a qual estou confortável, como o **[IntelliJ da JetBrains](https://www.jetbrains.com/idea/) para Java.** Mas você vai conseguir encontrar esse tipo de ferramenta na IDE que usa para sua linguagem preferida. Se não encontrar, talvez devesse experimentar outra IDE.

### Renomear

Provavelmente a ferramenta de refatoração **mais simples** é Renomear. Você tem uma entidade com um nome que não gosta e quer mudar. Claro, você pode editar manualmente… mas isso não vai ser trivial porque essa entidade pode ser usada em muitos lugares.

Por exemplo: quero mudar o nome da classe `Input`. Quero chamá-la de `WordFrequency`.

![Exemplo 1](./img/rename-1.png)

Por ser uma Classe, há muitos lugares potenciais onde eu deveria mudar o identificador `Input`. Manualmente, eu deveria procurar todos eles. Mas temos a ferramenta de refatoração Renomear:

![Exemplo 2](./img/rename-2.png)

> Ferramenta Renomear com todas as opções para renomear uma entidade de forma segura

Essa ferramenta vai renomear a entidade e se encarregar de renomear tudo o que precisamos: outros usos, o nome do arquivo, testes… até nomes de variáveis que possam ter relação com nossa entidade:

![Exemplo 3](./img/rename-3.png)

> Ela percebeu que eu tinha várias variáveis que eu poderia querer mudar. Obrigado, IDE!

### Extrair método

Essa é provavelmente a ferramenta que mais uso. Vamos ver um exemplo:

1. Tenho este trecho de código que faz parte de uma função muito grande que quero refatorar. Acho que algumas dessas linhas estão fazendo algo único que poderia ser uma função privada. Então decido extrair.

![Exemplo 1](./img/extract-1.png)

> Quero extrair a criação de `wordFrequencyList` para um método

2. Uso a ferramenta de extrair método. Essa ferramenta me oferece várias opções sobre como o novo método vai ficar:

![Exemplo 2](./img/extract-2.png)

> A ferramenta de extrair método até se atreve a propor um bom nome…

3. Agora o código está extraído para um método e aqui temos a chamada. A ferramenta vai cuidar de criar o método, mover o código e substituir todos os lugares onde tínhamos esse mesmo código por uma chamada (porque ela encontra duplicatas).

![Exemplo 3](./img/extract-3.png)

> Mais limpo, não é?

### Outras ferramentas

Existem muitas Ferramentas de Refatoração para as ações mais comuns que você pode querer fazer para reestruturar seu código. Falando do IntelliJ Idea, podemos dar uma olhada na [documentação sobre Refatoração de Código](https://www.jetbrains.com/help/idea/refactoring-source-code.html) ou você pode procurar a documentação da sua IDE preferida. **Eu te encorajo a descobrir todas as Ferramentas de Refatoração na sua IDE** e brincar com elas para entender como funcionam e se você as acha úteis.

![Exemplo 1](./img/other-1.png)

> Muitas ferramentas de refatoração!

Na verdade, na minha IDE posso selecionar um trecho de código e abrir o menu "Refatorar Isso" que vai me mostrar todas as Ferramentas de Refatoração que posso aplicar a esse caso concreto:

![Exemplo 2](./img/other-2.png)

> Me diga, querida IDE, o que posso fazer com isso?

## Um último argumento

Há um argumento final para limpar seu código se você não está completamente convencido

> > > # Sempre programe como se a pessoa que vai acabar mantendo seu código fosse um psicopata violento que sabe onde você mora — John F. Woods.

## Recursos

Artigo original: [Clean Code — A practical approach](https://medium.com/clarityai-engineering/clean-code-a-practical-approach-896546435235)
