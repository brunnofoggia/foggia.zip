# Evite a síndrome "Not Invented Here" (ANIH)

Escrito por Bruno Foggia, 2026.

> Quando fizer sentido, prefira bibliotecas confiáveis, já existentes, em vez de escrever sua própria solução para um problema que já foi resolvido.

Existem vários ditados conhecidos na engenharia de software relacionados a este princípio. "Reinventar a roda" descreve o ato de escrever seu próprio software para resolver um problema que já foi adequadamente resolvido. A síndrome do "Not Invented Here" (NIH) descreve a tendência de acreditar que apenas o código escrito por nós mesmos é válido e, portanto, evitar o uso de qualquer software ou biblioteca de terceiros.

Certamente já fui culpado de reinventar a roda no passado – antes de perceber que deveria primeiro verificar se a roda já havia sido inventada. Não acho que estou sozinho nisso.

## Usando Bibliotecas de Terceiros

O ponto principal aqui é que o uso de bibliotecas de terceiros nos dá a capacidade de focar em nosso verdadeiro objetivo: criar produtos valiosos para nossos clientes de forma ágil e eficiente. E podemos fazer isso com mais eficácia quando nos apoiamos em soluções existentes para problemas já resolvidos. Dito isso, sempre pesquise na internet por bibliotecas que resolvam seu problema antes de começar a escrever seu próprio código, peça recomendações aos seus colegas e consulte fóruns da comunidade. Você vai se surpreender com a quantidade de bibliotecas disponíveis e com quantas delas são bem mantidas e confiáveis.

Infelizmente, bibliotecas de terceiros também podem introduzir vulnerabilidades de segurança, por isso é importante avaliá-las antes de depender delas. Considere perguntas como: com que frequência ela é desenvolvida e mantida? É compatível com outras ferramentas em uso? Possui problemas, bugs ou vulnerabilidades que possam dificultar o trabalho ou causar problemas no projeto maior? Sua licença é compatível com o projeto? Seus colegas e a comunidade terão opiniões, recomendações e conselhos, então não tenha medo de perguntar.

**Evitar o Not Invented Here (ANIH)** significa aproveitar soluções existentes e confiáveis quando apropriado, para que você possa se concentrar em entregar valor em vez de resolver problemas já resolvidos. Avalie as bibliotecas de terceiros com cuidado e só crie suas próprias abstrações ou bibliotecas quando houver uma necessidade e benefício claros. Encontrar o equilíbrio certo entre reuso e desenvolvimento customizado é fundamental para um software eficiente e de fácil manutenção.

## Escrevendo Seu Próprio Código

Uma coisa que posso recomendar com certeza é: se você precisar escrever seu próprio código, mas quiser abstrair algo para evitar repetição, geralmente comece com uma pasta "common" simples com abstrações de código e, depois disso, você pode pensar em criar sua própria biblioteca e publicá-la online (em algum gerenciador de pacotes como npm ou PyPI). Dessa forma, você pode reutilizá-la em seus projetos e compartilhá-la com a comunidade. **MAS** lembre-se: antes de fazer isso, certifique-se de ter repetido aquele código pelo menos duas vezes e que o código seja genérico o suficiente para ser reutilizado em diferentes contextos. Caso contrário, você pode acabar com uma biblioteca que só é útil para o seu caso de uso específico e que não agrega muito valor aos seus projetos ou à comunidade.

Sempre que sentir vontade de criar seu próprio código, lembre-se de que se repetir no início pode ajudá-lo a entender suas reais necessidades de abstração. Para complementar este tópico, vou indicar este artigo que mostra como o padrão DRY pode se tornar um antipadrão se você sempre buscar a perfeição: [Please do repeat yourself](../pdry/readme.en.md). A questão é: você precisará encontrar o equilíbrio certo ao escrever seu código — às vezes será necessário reinventar a roda ou estender uma biblioteca existente, mas você deve sempre se perguntar se isso é realmente necessário antes de fazê-lo.

## Referências

- [Please do repeat yourself](../pdry/readme.en.md)
