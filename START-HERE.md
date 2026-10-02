# Z-Agent Multi-Agent v1.4 — Antigravity Native

## Estrutura correta detectada pelo Antigravity CLI

O próprio comando `/agents` informa o formato de workspace:

`.agents/agents/{agent_name}/agent.md`

Portanto cada subagent precisa ter uma pasta própria.

## Estrutura

```text
zagent-site-starter/
├── AGENTS.md
├── .agents/
│   └── agents/
│       ├── material-auditor/
│       │   └── agent.md
│       ├── content-strategist/
│       │   └── agent.md
│       ├── art-director/
│       │   └── agent.md
│       ├── ui-architect/
│       │   └── agent.md
│       ├── frontend-engineer/
│       │   └── agent.md
│       ├── visual-qa/
│       │   └── agent.md
│       └── technical-qa/
│           └── agent.md
└── docs/
    └── factory/
        ├── STATUS.md
        ├── CHANGE-REQUEST.md
        ├── 01-material-inventory.md
        ├── 02-content-strategy.md
        ├── 03-art-direction.md
        ├── 04-ui-architecture.md
        ├── 05-implementation-report.md
        ├── 06-visual-qa.md
        └── 08-technical-qa.md
```

## Remover configuração anterior

Remova a estrutura incorreta:

`.agents/agents/*.md`

Ela não é descoberta pelo CLI como custom agent.

Substitua pela estrutura de diretórios acima.

## Depois de copiar

1. Saia do Antigravity CLI atual.
2. Confirme que os arquivos estão na estrutura correta.
3. Abra novamente `agy` na raiz do projeto.
4. Execute `/agents`.

O resultado esperado é que `Available Agents` liste:
- material-auditor
- content-strategist
- art-director
- ui-architect
- frontend-engineer
- visual-qa
- technical-qa
- default

## Teste de infraestrutura

Quando os 7 aparecerem, peça:

> Delegue SOMENTE ao subagent `material-auditor` uma tarefa de teste: identifique seu papel e suas fontes autorizadas, sem analisar o cliente e sem modificar arquivos. Informe se a execução ocorreu em um subagent separado.

Não comece a fábrica real antes desse teste passar.
