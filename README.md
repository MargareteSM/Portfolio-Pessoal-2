<div align="center">

# Portfolio Pessoal V0.1 — Margarete Macedo

### Aprender também é construir.

Um portfólio pessoal em evolução, criado como parte da jornada de aprendizado em desenvolvimento web e design.

[Visualizar aplicação](https://77c5be57-fdf1-4a78-9915-821222f0fa84-00-3byfcfu1p23jx.reed.replit.dev/) · [Abrir no Replit](https://replit.com/@margaretesm/Portfolio-Pessoal-V01) · [Ver no GitHub](https://github.com/MargareteSM/Portfolio-Pessoal-Replit)

</div>

---

## Sobre o projeto

O **Portfolio Pessoal V0.1** é uma página única que apresenta a trajetória, os estudos, as habilidades em desenvolvimento, os projetos em construção e os canais de contato de Margarete Macedo.

Mais do que uma página finalizada, este repositório funciona como um registro de prática e experimentação. Cada versão acompanha novos aprendizados e pode receber melhorias conforme novos conhecimentos forem adquiridos.

> **Ideias em código. Aprendizado em movimento.**

## Preview

![Preview do portfólio](screenshots/portfolio-desktop.jpg)

## Demonstração

- **Aplicação/preview:** [acessar o portfólio](https://77c5be57-fdf1-4a78-9915-821222f0fa84-00-3byfcfu1p23jx.reed.replit.dev/)
- **Projeto no Replit:** [Portfolio-Pessoal-V01](https://replit.com/@margaretesm/Portfolio-Pessoal-V01)
- **Repositório no GitHub:** [MargareteSM/Portfolio-Pessoal-Replit](https://github.com/MargareteSM/Portfolio-Pessoal-Replit)

## Tecnologias

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff" alt="Vite" />
  <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff" alt="pnpm" />
</p>

- **HTML5:** estrutura semântica da página e metadados para compartilhamento.
- **CSS3:** direção visual, layout responsivo, animações, tipografia e suporte a preferência por redução de movimento.
- **JavaScript:** interações da navegação, revelação de conteúdo, contador de progresso e atualização automática do ano.
- **TypeScript:** utilizado na configuração e na estrutura de workspace, incluindo o artefato React existente no repositório.
- **Vite:** ferramenta de desenvolvimento e build configurada para o artefato do portfólio.
- **pnpm:** gerenciamento de dependências e organização do monorepo/workspace.

## Funcionalidades

- Página única com navegação por seções: sobre, trajetória, aprendizado, habilidades, projetos, progresso e contato.
- Menu de navegação adaptado para telas menores, com botão de abertura e fechamento.
- Layout responsivo para diferentes tamanhos de tela.
- Seções de apresentação da trajetória profissional e formação acadêmica.
- Listas de habilidades, cursos, projetos em construção e objetivos de aprendizado.
- Animação de revelação dos blocos quando entram na área visível da página.
- Contador e barra de progresso animados na seção de acompanhamento da jornada.
- Atualização automática do ano exibido no rodapé.
- Link de acesso ao conteúdo para navegação por teclado e estilos de foco visível.
- Tratamento da preferência do sistema por redução de movimento.
- Links de contato por e-mail e para GitHub, LinkedIn e Instagram.

## Estrutura do projeto

```text
.
├── artifacts/
│   ├── api-server/
│   ├── mockup-sandbox/
│   └── portfolio-pessoal/
├── lib/
├── screenshots/
├── scripts/
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── tsconfig.json
└── .replit
```

O artefato visual principal do portfólio está em `artifacts/portfolio-pessoal/`.

## Como executar

### Pré-requisitos

- Node.js, conforme o ambiente configurado no `.replit`.
- pnpm, utilizado pelos scripts e pelo lockfile do projeto.

### Instalar dependências

Na raiz do repositório:

```bash
pnpm install
```

### Executar o portfólio em desenvolvimento

```bash
pnpm --filter @workspace/portfolio-pessoal run dev
```

### Gerar o build do portfólio

```bash
pnpm --filter @workspace/portfolio-pessoal run build
```

### Verificar tipos

```bash
pnpm run typecheck
```

## Desenvolvimento e aprendizado

Este projeto representa uma etapa inicial e real de aprendizado. A proposta é construir enquanto se aprende: testar ideias, observar resultados, organizar descobertas e evoluir gradualmente.

O portfólio não pretende apresentar uma trajetória pronta. Ele documenta um caminho em movimento — com espaço para experimentação, ajustes e novos projetos.

## Roadmap

- aprimoramentos visuais e de composição;
- melhorias de responsividade em diferentes dispositivos;
- evolução contínua de acessibilidade;
- otimizações de estrutura e carregamento;
- inclusão de novos projetos e experimentos;
- refinamento conforme novos conhecimentos forem adquiridos.

## Autora

**Margarete Macedo**

- GitHub: [@MargareteSM](https://github.com/MargareteSM)

## Licença

Não foi encontrado um arquivo `LICENSE` neste repositório. Portanto, nenhuma licença é declarada nesta documentação.

---

<div align="center">

**Aprender também é construir.**

</div>
