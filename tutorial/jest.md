# Jest

Testes unitários são fundamentais para desenvolver um software robusto e confiável que permite aos desenvolvedores refatorar e adicionar novas funcionalidades conforme necessário com pouca preocupação quanto a introdução de novos bugs ou comportamento regressivo. Como o próprio nome indica, testes unitários (ou de unidade) testam a menor parte verificável de um software, ou seja, uma função ou até mesmo um componente visual que possui idealmente apenas uma entrada (no máximo duas) e uma saída.
Para tanto, é necessário em primeiro lugar escrever código que seja testável. Consideramos um código testável quando este é fracamente acoplado, um componente ou uma função não devem saber mais que o necessário sobre o funcionamento de outras, por exemplo: um componente visual que possui diversas regras de negócio em seu interior que dependem de outras funções que são recebidas por props.  
Devemos sempre ter em mente que componentes visuais devem ser o mais burros possível, não devem ter conhecimentos maiores que qual dado deve ser exibido e como. Um componente visual não deve ter em seu interior lógica para tratamento de dados, implementação de regras de negócio ou requisições para obtenção de dados.

Essa metodologia de testagem é muito utilizada para testar em isolamento, garantindo que o comportamento de algum módulo não seja modificado por alterações em qualquer parte do código. Testes unitários rodam rápido e devem ser rodados com frequência durante o processo de desenvolvimento para que se tenha um acompanhamento quanto às mudanças feitas no código.

Jest é uma das ferramentas de testes mais populares e amplamente utilizadas para aplicações feitas em React. Com sua simplicidade e flexibilidade, ele permite que você crie testes unitários, integração e snapshots para sua aplicação de forma eficiente e confiável. Além disso, Jest é altamente integrado ao React, o que significa que você pode escrever testes que simulam interações com componentes de forma fácil e precisa.

Vamos explorar os principais conceitos de testes e como utilizar o Jest para testar uma aplicação React.

Para utilizar jest, você precisa instalar o pacote `jest` e o pacote `@testing-library/jest-dom`:

```bash
$ npm install --save-dev jest @testing-library/jest-dom
```

Para executar todos os testes, você pode utilizar o comando `jest` no terminal:

```bash
$ jest
```

Para executar um teste específico, você pode utilizar o comando `jest` com o nome do arquivo de teste:

```bash
$ jest my-test.js #ou
$ jest my-path/to/my-test.test.js
```

Além disso, a CLI do jest também conta com diversas flags que podem ser utilizas para configurar a execução dos testes. Por exemplo, você pode utilizar a flag `--watch` para executar os testes automaticamente quando os arquivos forem alterados:

```bash
$ jest --watch
```

Para rodar os testes em paralelo, você pode utilizar a flag `--runInBand`:

```bash
$ jest --runInBand
```

Para parar a execução dos testes após o primeiro erro, você pode utilizar a flag `--bail`:

```bash
$ jest --bail
```

Para saber mais sobre as flags disponíveis, você pode consultar a [documentação oficial](https://jestjs.io/docs/en/cli).

## Principais conceitos de testes

**1. Testes Unitários**
Testes unitários são utilizados para garantir que cada parte da sua aplicação esteja funcionando corretamente. Por exemplo, você pode testar se uma função está retornando o valor correto ou se um componente está renderizando o conteúdo correto.

```js
import React from "react";
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("This is some data")).toBeInTheDocument();
  });

  it("displays the correct data", () => {
    render(<MyComponent />);
    const data = screen.getByText("This is some data");
    expect(data).toBeInTheDocument();
  });
});
```

**2. Mocking**
Mocking é utilizado para substituir partes da sua aplicação por versões simplificadas, que podem ser utilizadas para testar a aplicação. Por exemplo, você pode mockar uma API para testar se um componente está se comunicando corretamente com ela.

```js
import React from "react";
import { render, waitFor } from "@testing-library/react";
import MyComponent from "./MyComponent";

jest.mock("./api", () => {
  return {
    fetchData: () => Promise.resolve({ data: "This is some data" }),
  };
});

describe("MyComponent", () => {
  it("fetches data from API", async () => {
    render(<MyComponent />);
    await waitFor(() =>
      expect(screen.getByText("This is some data")).toBeInTheDocument()
    );
  });
});
```

**3. Testes de Integração**
Testes de integração são utilizados para garantir que diferentes partes da sua aplicação estejam funcionando corretamente juntas. Por exemplo, você pode testar se um componente se comunica corretamente com uma API ou se um componente está renderizando o conteúdo correto quando recebe uma prop.

```js
import React from "react";
import { render, waitFor } from "@testing-library/react";
import MyComponent from "./MyComponent";

jest.mock("./api", () => {
  return {
    fetchData: () => Promise.resolve({ data: "This is some data" }),
  };
});

describe("MyComponent", () => {
  it("fetches data from API", async () => {
    render(<MyComponent />);
    await waitFor(() =>
      expect(screen.getByText("This is some data")).toBeInTheDocument()
    );
  });
});
```

**4. Testes de Snapshot**
Testes de snapshot são utilizados para garantir que o conteúdo renderizado por um componente não foi alterado. Por exemplo, você pode testar se um componente continua renderizando o mesmo conteúdo quando recebe diferentes props.

Testes de snapshot são particularmente úteis para componentes visuais, pois eles garantem que a aparência e comportameno do componente se mantém consistente ao longo do tempo. Quando uma alteração é feita, o teste falha e o desenvolvedor pode decidir se a alteração é esperada ou não.

O Snapshot irá criar um arquivo dentro da pasta `__snapshots__` com o mesmo nome do arquivo de teste. Por exemplo, o arquivo `MyComponent.test.js` irá gerar o arquivo `MyComponent.test.js.snap`. O conteúdo do arquivo de snapshot é um JSON que contém o conteúdo renderizado do componente. Por exemplo:

```json
// __snapshots__/MyComponent.test.js.snap
exports[`MyComponent renders correctly 1`] = `
<div>
  <h1>
    This is some data
  </h1>
</div>
`;
```

```js
import React from "react";
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<MyComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
```

Para atualizar testes de snapshot, você pode utilizar o seguinte comando no terminal:

```bash
$ jest --update-snapshot
```

**5. Act, Arrange, Assert (AAA)**
Act (Atuar), Arrange (Organizar) e Assert (Assegurar) é um padrão de teste que consiste em dividir os testes em três partes.

- **Act**: A primeira parte do teste consiste em executar a ação que você deseja testar. Por exemplo, você pode clicar em um botão ou enviar um formulário.

- **Arrange**: A segunda parte do teste consiste em preparar o ambiente para a ação que você deseja testar. Por exemplo, você pode renderizar um componente ou mockar uma API.

- **Assert**: A terceira parte do teste consiste em fazer asserções sobre o resultado da ação que você deseja testar. Por exemplo, você pode verificar se o estado de um componente foi atualizado corretamente.

Jest fornece uma biblioteca de asserções, que permite que os desenvolvedores escrevam testes que fazem asserções específicas sobre o comportamento de seus componentes. Por exemplo, você pode afirmar que um componente é renderizado corretamente, ou que o estado de um componente é atualizado corretamente quando um evento ocorre.

**6. Testes de Cobertura**
Jest tem suporte para testes de cobertura, que permite que os desenvolvedores verifiquem a cobertura de seus testes. Por exemplo, você pode verificar se todos os componentes e funções da sua aplicação estão sendo testados.

Para testar a cobertura de seus testes, você pode executar o comando:

```bash
$ jest --coverage
```

Este comando vai gerar um relatório de cobertura, que pode ser visualizado no seu terminal. Para uma visualização mais detalhada, você pode abrir o arquivo `coverage/lcov-report/index.html` no seu navegador.

Apesar de testes de cobertura serem úteis, eles não devem ser utilizados como uma métrica para a qualidade dos testes. Por exemplo, você pode ter uma cobertura de 100%, mas ainda assim ter testes que não estão testando o comportamento correto da sua aplicação. Por isso, é importante escrever testes que realmente testem o comportamento da sua aplicação.

## Configurando uma aplicação React + TS com Jest

Iremos criar uma aplicação React simples para demonstrar como utilizar Jest para testar uma aplicação React. Você pode encontrar o código-fonte desta aplicação no repositório do GitHub.

## Requisitos

- Node.js
- NPM ou Yarn
- Conhecimentos básicos de React

## Criando uma aplicação React

Para começar, vamos criar uma aplicação React com Typescript simples utilizando o create-react-app. Para isso, execute o seguinte comando no terminal:

```bash
yarn create react-app my-app --template typescript
```

Após a criação da aplicação, vamos instalar as dependências necessárias para utilizar o Jest. Para isso, execute o seguinte comando no terminal:

```bash
yarn add -D jest @types/jest ts-jest @testing-library/react
```

Ao criar o app, teremos a seguinte estrutura de pastas:

```bash
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
└── src
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    └── serviceWorker.ts
```

A pasta src contém o código-fonte da nossa aplicação. Dentro desta pasta, temos o arquivo App.tsx, que é o componente principal da nossa aplicação. O arquivo App.test.tsx contém os testes unitários para o componente App. O arquivo setupTests.ts é responsável por configurar o ambiente de testes do Jest. Por fim, a pasta public contém os arquivos estáticos da aplicação, como o index.html e o favicon.

## Configurando o Jest

Antes de escrever qualquer teste, precisamos configurar o Jest para que ele possa encontrar os testes e executá-los corretamente. Para isso, vamos criar um arquivo de configuração do Jest na raiz do projeto. Para isso, crie um arquivo chamado jest.config.js na raiz do projeto e adicione o seguinte conteúdo:

```js
module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/setupJest.js"],
};
```

A configuração acima irá configurar o Jest para que ele execute os testes em um ambiente de DOM. Além disso, ele irá configurar o Jest para que ele execute os testes dentro da pasta src. Por fim, ele irá configurar o Jest para que ele execute o arquivo setupJest.js antes de executar os testes.

Agora, vamos criar o arquivo setupJest.js na raiz do projeto. Este arquivo irá configurar o ambiente de testes do Jest. Para isso, adicione o seguinte conteúdo ao arquivo:

```js
require("jest-fetch-mock").enableMocks();

import "@testing-library/jest-dom/extend-expect";
```

O primeiro comando irá configurar o Jest para que ele possa mockar funções do fetch. O segundo comando irá adicionar asserções customizadas para o Jest.

## Adicionar o Jest ao package.json

Para que o Jest possa ser executado através do comando `yarn test`, precisamos adicionar o Jest ao package.json. Para isso, adicione o seguinte conteúdo ao package.json:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

# Conclusão
Testes são uma parte vital do desenvolvimento de software, ajudando a garantir a qualidade e a confiabilidade do seu código. Eles também podem ajudar a prevenir regressões futuras e a facilitar a manutenção e a evolução do seu aplicativo.

É importante lembrar que os testes são apenas uma parte de uma abordagem de qualidade de software completa. É fundamental combinar os testes com práticas de codificação sólidas, design orientado a dados e planejamento eficaz para garantir o sucesso a longo prazo do seu aplicativo.

Em suma, utilizar Jest para testar aplicativos React é uma ótima maneira de garantir a qualidade e a confiabilidade do seu código, permitindo que você evolua com confiança e forneça aos seus usuários uma experiência excelente.

