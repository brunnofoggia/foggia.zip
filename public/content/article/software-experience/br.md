# Software Experience: fundação a prova de balas

Escrito por Bruno Foggia, 2026.

Estrutura de diretórios, configurações de editor, padronização de código, facilidade de execução local — nada disso é mero detalhe. É fundação.
Se a experiência de quem chega no repositório é ruim, o problema não é a pessoa — é o repositório.

---

## 0. Checklist definitivo

A idéia aqui é resumir todo o conteúdo em um checklist prático.

1. [ ] Versione (git, mercurial, etc.) e respeite o versionamento: sem pacotes zip de alterações enviados por e-mail.
2. [ ] Estrutura de diretórios clara e previsível. Código-fonte em `src/`, infraestrutura em `infra/`, docs em `docs/`, arquivos públicos em `public/`, etc.
3. [ ] Configurações de editor commitadas (`.editorconfig`, `.vscode/`, etc.)
4. [ ] Formatador automático integrado ao editor e CI
5. [ ] Linter com regras versionadas e pre-commit hooks
6. [ ] Execução da aplicação em ambiente local é requisito inegociável
7. [ ] Pré-requisitos para o ambiente local. Limitados a runtime e ferramentas essenciais da linguagem e Docker
8. [ ] Repositório documentado e intuitivo. README funcional como porta de entrada é necessidade. `.env.example` com todas as variáveis necessárias.
9. [ ] Use e abuse da dockerização. Dockerize a execução da aplicação, mas também as dependências remotas: banco de dados, mensageria, cache, etc.
10. [ ] Comandos comuns do projeto declarados em local oficial (`pyproject.toml`, `package.json`, `Makefile`)
11. [ ] Conventional Commits com validação automática
12. [ ] CI ativo desde o primeiro commit (lint, format, types, testes, build)
13. [ ] Faça o que tem que ser feito. Fazer entregas ruins e culpar a pressa alheia não vai te salvar da condenação quando tudo desabar.


## 1. Versionamento

> **Sem isso:** arquivos zipados com "alterações", e-mails com "segue o código atualizado". O histórico é perdido, conflitos de evolutivas são frequentes. A colaboração é inviável.

Versionamento é a base de qualquer projeto de software. Ele não é opcional, e não é apenas para código — toda a configuração, documentação e infraestrutura devem estar versionados.

Versionar é a única maneira de tornar possível reverter mudanças problemáticas,  e evoluir de forma progressiva sem contínuos retrocessos. Sem versionamento, cada alteração é um risco, cada membro do time segue seu próprio caminho, não existe colaboração eficiente sem seguir padrões e processos.

- **Ignorar alguns arquivos e diretórios** é primordial para evitar poluir o repositório com dados sensíveis, arquivos binários, etc. Utilize `.gitignore`, `.hgignore` ou equivalente.

## 2. Estrutura de diretórios clara e previsível

> **Sem isso:** código, infraestrutura, documentos, testes, etc. se misturam na raiz do projeto. Fica impossível entender onde colocar ou encontrar algo. O repositório se torna um caos.

Crie uma estrutura de diretórios clara e consistente desde o início. Convenções comuns:

- `src/` para código-fonte
- `infra/` para infraestrutura (Docker, Kubernetes, Terraform)
- `docs/` para documentação
- `public/` para arquivos públicos
- `tests/` para testes

---

## 3. Configuração do editor como parte do repositório

> **Sem isso:** diferenças de indentação, charset e line endings geram diffs fantasma, PRs poluídos e conflitos desnecessários.

Configurações de editor são parte do projeto e devem ser commitadas. Não são preferências pessoais — são contrato do time.

- **`.editorconfig`** — consistência cross-editor:

```ini
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

> Observação: criar o `.editorconfig` não garante a formatação automática dos arquivos ao salvar. Isso será explicado nos itens seguintes.

---

## 4. Formatação automática de código

> **Sem isso:** code reviews travados discutindo estilo. Código visualmente inconsistente que dificulta leitura.

A formatação deve rodar ao salvar o arquivo no editor. Para isso, o editor precisa possuir suporte nativo ou via extensão, e a configuração deve estar presente no repositório para garantir que todo código entregue seja formatado automaticamente seguindo os padrões definidos.

**VS Code** — tem nativa a funcionalidade de formatar ao salvar. Para ativá-la inclua no repositório o arquivo:

- **`.vscode/settings.json`** — permite definir configurações específicas do editor para o projeto.

Dentro deste arquivo, certifique-se de ativar a opção `editor.formatOnSave` para que o código seja formatado automaticamente sempre que um arquivo for salvo no projeto. 

```json
{
    "editor.formatOnSave": true
}
```

---

### Formatação avançada: formatadores específicos para uma linguagem

Utilizar um formatador específico para uma linguagem adiciona uma camada extra de configurações de estilo mais avançadas e específicas, alem de fornecer um CLI para integração com pre-coommit hooks e CI.

Ao escolhar um formatador, é necessário configurar as regras de formatação do editor para usar o formatador escolhido. Por exemplo, para Python usando o Black, a configuração do editor deve apontar para o Black como formatador padrão para arquivos Python.

#### Configurando o editor para usar o formatador escolhido

**VS Code** — aplicando o Black para Python — No arquivo **`.vscode/settings.json`**:

```json
{
    "editor.formatOnSave": true,
    // Objetivamente: Defina o Black como formatador padrão para arquivos Python
    "[python]": {
        
        "editor.defaultFormatter": "ms-python.black-formatter"
    }
}
```

**VS Code** — aplicando o Prettier para Node/TypeScript — No arquivo **`.vscode/settings.json`**:

```json
{
    "editor.formatOnSave": true,
    // Objetivamente: Defina o Prettier como formatador padrão para o projeto
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Caso precise configurar para formatar apenas arquivos específicos, adicione as seções correspondentes para cada tipo de arquivo:

```json
{
    "editor.formatOnSave": true,
    // Ocasionalmente: Defina o Prettier como formatador padrão por tipo de arquivo
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // para projetos frontend com TypeScript React (.tsx)
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```


#### Configurações de formatação específicas para o formatador escolhido 

**Python** — [Black](https://black.readthedocs.io/):

```toml
# pyproject.toml
[tool.black]
line-length = 88
target-version = ["py313"]
```

**Node/TypeScript** — [Prettier](https://prettier.io/):

```json
// .prettierrc
{
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 120
}
```
---

## 5. Linting como guarda de qualidade

> **Sem isso:** imports não usados, variáveis mortas, padrões problemáticos se acumulam silenciosamente até doer em produção.

Linting é diferente de formatação. Formatação cuida da aparência; linting cuida da substância — erros lógicos, código morto, violações código esperado e ate de boas práticas.

**Python** — [Ruff](https://docs.astral.sh/ruff/):

```toml
# pyproject.toml
[tool.ruff]
line-length = 88

[tool.ruff.lint]
select = ["E", "F", "W", "I", "UP", "SIM"]
```

**Node/TypeScript** — [ESLint](https://eslint.org/):

```json
// .eslintrc.json
{
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "rules": {
        "no-unused-vars": "error",
        "no-console": "warn"
    }
}
```

Combine com **pre-commit hooks** (`pre-commit` em Python, `husky` + `lint-staged` em Node). Se o linter recusa, o commit não acontece.

---

## 6. Execução da aplicação em ambiente local é requisito inegociável

> **Sem isso:** o ciclo de feedback sai de segundos para minutos ou horas. Devs escrevem código sem nunca ver a aplicação rodar.

O software **deve** rodar na máquina de quem desenvolve. Dependências externas (banco, fila, cache) ficam disponíveis via containers. Integrações com APIs de terceiros devem ter mocks ou sandboxes documentados.

Meta: `git clone` → poucos comandos → aplicação de pé.

---

## 7. Pré-requisitos mínimos para o ambiente local

> **Sem isso:** README com dezenas de passos, múltiplos SDKs, configurações e scripts manuais para configuração da máquina local. Onboarding leva dias.

### Pré-requisitos limitados ao essencial: 

> Quanto mais passos manuais entre o clone e a execução, mais frágil é a experiência.

- **runtime da linguagem**: Python, Node, etc.
- **ferramentas essenciais da linguagem**: 
    - Python: pip, pipx, pyenv, etc.
    - Nodejs: npm, nvm, etc.
- **Docker**. 

### Pré-requisitos opcionais, mas necessários para uma experiência fluida:

- **gerenciador de ambientes** (Python: `pyenv`, Node: `nvm`)
- **gerenciador de dependências** (Python: `uv`/`poetry`, Node: `npm`/`yarn`/`pnpm`)
- **mapeamento e execução de comandos**:
    - Python: `hatch` (comandos em `pyproject.toml`)
    - Node (nativo): `npm` (scripts em `package.json`), `npx` (execução de binários locais)

> No python o componente `hatch`, diferente dos demais (`uv`, `pipx`, `pip`), é único capaz de ambas funções: acessar um mapeamento de comandos definido previamente (no `pyproject.toml`) e executar comandos binários locais do projeto.

---

## 8. Repositório documentado e intuitivo

> **Sem isso:** conhecimento mora na cabeça das pessoas. Cada dev recebe uma resposta diferente sobre como rodar o projeto.

O repositório deve falar por si só:

- **README** — o que é, objetivos, composição, como executar, como contribuir. Se o membro do time leu e não consegue executar, o README falhou.
- **Documentação** — pasta `docs/` com detalhes de arquitetura, negócio, decisões, padrões, etc.
- **`.env.example`** — template versionado com todas as variáveis possíveis e valores ilustrativos.

> O repositório é a única fonte de verdade. Se a informação não está nele, ela não existe oficialmente.

---

## 9. Containerização do ambiente de desenvolvimento

> **Sem isso:** "funciona na minha máquina" é desculpa para ambiente local não funcional, quebrado, dependências conflitantes, versões divergentes. Onboarding é um pesadelo.

Dependências de infraestrutura devem ser dockerizadas e versionadas junto ao projeto.

---

## 10. Comandos comuns como interface do projeto

> **Sem isso:** comandos espalhados em wikis, Slack e memórias. Cada membro do time inventa seu jeito de rodar as coisas e detém conhecimento fragmentado pra si.

O projeto deve ter uma interface de comandos comuns declarada num lugar oficial.

**Python** (`hatch` + comandos em `pyproject.toml`):

```toml
[project.scripts]
start = "app:main"

[tool.hatch.envs.default]
type = "virtual"
path = ".venv"

[tool.hatch.envs.default.scripts]
start          = "python -m app"
test           = "pytest -q"
lint           = "ruff check ."
format         = ["ruff check --fix .","black ."]
typecheck      = "mypy src/ tests/"
check-all      = [
  "ruff check .",
  "black --check .",
  "mypy src/ tests/",
  "pytest"
]
```

**Node** (`package.json`):

```json
{
    "scripts": {
        "dev": "nodemon --watch src --ext ts,json --exec ts-node src/main.ts",
        "build": "tsc",
        "lint": "eslint src/",
        "format": "prettier --write src/",
        "test": "jest"
    }
}
```

`Makefile` também é opção válida e agnóstica de linguagem. Exemplo de `Makefile` para Node/TypeScript:

```# Makefile
.PHONY: dev build lint format test
dev:
	nodemon --watch src --ext ts,json --exec ts-node src/main.ts
build:
	tsc
lint:
	eslint src/
format:
	prettier --write src/
test:
	jest
```

---

## 11. Commits e histórico como documentação viva

> **Sem isso:** `git log` cheio de "fix", "wip", "ajuste", commits gigantescos, branches que duram eras. Histórico ilegível, changelog inviável, merge impossível.

- Prefira commits pequenos, atômicos, com mensagens claras e descritivas. Evite commits gigantescos que misturam várias mudanças.
- Use branches curtas e focadas em uma única tarefa ou feature. Evite branches longos que acumulam mudanças por semanas ou meses.
- Adote o versionamento semântico. Ferramentas como **Commitizen** facilitam a criação de commits seguindo a convenção.

Exemplos de mensagens de commit seguindo o versionamento semântico:

1. feat: adiciona endpoint de criação de usuário
1. fix: corrige cálculo de frete para regiões Norte
1. refactor: extrai lógica de validação para módulo dedicado
1. build: atualiza dependências de desenvolvimento
1. docs: adiciona seção de configuração no README

---

## 12. Padronização de entregas desde o dia zero

> **Sem isso:** CI "pra depois" nunca chega. Primeiro bug em produção que um lint pegaria custa muito mais que configurar o pipeline no início.

>>>> falar aqui sobre pre-commit hooks inves de CI. exatamente porque da pra obter uma experiência de qualidade localmente, sem depender de um pipeline externo, evitando um commit quebrado ou fora de padrão.

**Desde o primeiro commit** já deve estar no projeto:

1. **Formatação** — Python: Black, Node: Prettier.
1. **Lint** — Python: Ruff, Node: ESLint.
1. **Type checking** — Python: Mypy/Pyright, Node: TypeScript.
1. **Build** — quando aplicável, pois se o build quebra, é possível evitar, por exemplo, um deploy.

Por último, mas ainda mais importante:

1. **Formatação automática** — o ideal é que o código seja formatado automaticamente ao salvar o arquivo no editor, para evitar que código não formatado seja commitado.
1. **Pre-commit hooks** — para garantir que as verificações de formatação, lint, tipagem e o build rodem antes de cada commit, evitando commits quebrados ou fora de padrão.

---

## 13. Seus princípios devem ser tua lei

Se você acredita que algo precisa ser feito, e, por pressa ou qualquer outro motivo, não o faz, significa que você não entende a real importância disso.
E se você não entende, significa que você não tem uma base sólida para argumentar a necessidade disso para os outros.

Fazer entregas ruins e culpar o outro, seja por terem demonstrado pressa ou qualquer outro motivo, mostra **sua falta de responsabilidade**, pois quem é **responsável pela sua entrega é você**. Qualquer argumento contrário a isso são apenas lacunas ainda existentes na formação da maturidade e profissionalismo.

Reflexão: Se você atropelasse uma pessoa na rua porque seu amigo te ligou e pediu para você chegar mais cedo, isso faria dele o culpado?
