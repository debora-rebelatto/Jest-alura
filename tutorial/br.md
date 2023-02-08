# Jest

Jest é uma das ferramentas de testes mais populares e amplamente utilizadas para aplicações feitas em React. Com sua simplicidade e flexibilidade, ele permite que você crie testes unitários, integração e snapshots para sua aplicação de forma eficiente e confiável. Além disso, Jest é altamente integrado ao React, o que significa que você pode escrever testes que simulam interações com componentes de forma fácil e precisa.

Vamos explorar os principais conceitos de testes e como utilizar o Jest para testar uma aplicação React.

Para utilizar jest, você precisa instalar o pacote `jest` e o pacote `react-test-renderer`:

```bash
$ npm install --save-dev jest react-test-renderer
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
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct data", () => {
    const wrapper = shallow(<MyComponent />);
    const data = wrapper.find(".data").text();
    expect(data).toBe("This is some data");
  });
});
```

**2. Testes de Integração**
Testes de integração são utilizados para garantir que diferentes partes da sua aplicação estejam funcionando corretamente juntas. Por exemplo, você pode testar se um componente se comunica corretamente com uma API ou se um componente está renderizando o conteúdo correto quando recebe uma prop.

```js
import React from "react";
import { mount } from "enzyme";
import MyComponent from "./MyComponent";

jest.mock("./api", () => {
  return {
    fetchData: () => Promise.resolve({ data: "This is some data" }),
  };
});

describe("MyComponent", () => {
  it("fetches data from API", async () => {
    const wrapper = mount(<MyComponent />);
    await wrapper.instance().fetchData();
    wrapper.update();
    const data = wrapper.find(".data").text();
    expect(data).toBe("This is some data");
  });
});
```

**3. Testes de Snapshot**
Testes de snapshot são utilizados para garantir que o conteúdo renderizado por um componente não foi alterado. Por exemplo, você pode testar se um componente continua renderizando o mesmo conteúdo quando recebe diferentes props.

```js
import React from "react";
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
```

Para atualizar testes de snapshot, você pode utilizar o seguinte comando no terminal:

```bash
$ jest --update-snapshot
```

**4. Mocking**
Mocking é utilizado para substituir partes da sua aplicação por versões simplificadas, que podem ser utilizadas para testar a aplicação. Por exemplo, você pode mockar uma API para testar se um componente está se comunicando corretamente com ela.

```js
import React from "react";
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

jest.mock("./api", () => {
  return {
    fetchData: () => Promise.resolve({ data: "This is some data" }),
  };
});

describe("MyComponent", () => {
  it("fetches data from API", async () => {
    const wrapper = shallow(<MyComponent />);
    await wrapper.instance().fetchData();
    wrapper.update();
    const data = wrapper.find(".data").text();
    expect(data).toBe("This is some data");
  });
});
```

**5. Asserções**
Jest fornece uma biblioteca de asserções, que permite que os desenvolvedores escrevam testes que façam asserções específicas sobre o comportamento de seus componentes. Por exemplo, você pode afirmar que um componente é renderizado corretamente, ou que o estado de um componente é atualizado corretamente quando um evento ocorre.

**6. Testes de Cobertura**
Jest tem suporte para testes de cobertura, que permite que os desenvolvedores verifiquem a cobertura de seus testes. Por exemplo, você pode verificar se todos os componentes e funções da sua aplicação estão sendo testados.

Para testar a cobertura de seus testes, você pode executar o comando:

```bash
$ jest --coverage
```

Este comando vai gerar um relatório de cobertura, que pode ser visualizado no seu terminal. Para uma visualização mais detalhada, você pode abrir o arquivo `coverage/lcov-report/index.html` no seu navegador.

**7. Testes de Performance**

```js
import React from "react";
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it("updates state correctly", () => {
    const wrapper = shallow(<MyComponent />);
    wrapper.find(".button").simulate("click");
    expect(wrapper.state().isOpen).toBe(true);
  });
});
```

## Testando uma aplicação React

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




```js
describe("Teste do componente App", () => {
  it("Deve renderizar o componente App", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
```

O teste acima é um teste unitário para o componente App. O teste consiste em renderizar o componente App e verificar se o texto "Hello World" está presente na tela. Para executar o teste, execute o seguinte comando no terminal:

```bash
yarn test
```

```js
jest.mock("../state/hook/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});
```

Aqui estamos definindo mocks para os hooks useListaDeParticipantes e useNavigate. O hook useListaDeParticipantes é um hook que retorna a lista de participantes. O hook useNavigate é um hook que retorna uma função para navegar para uma determinada rota. Como não queremos testar o comportamento destes hooks, vamos definir mocks para estes hooks. O mock do hook useListaDeParticipantes irá retornar uma lista vazia. O mock do hook useNavigate irá retornar uma função vazia.

<!-- explique os testes abaixo -->

```js
describe("quando não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("a brincadeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
    ]);
  });
  test("a brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });
  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
  });
});

```

```js
const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("a pagina de configuracao", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
```

To make performance tests on a ReactJS app, you can use the performance testing tools provided by Jest, React, and other testing libraries. Here is a general outline of the process:

Identify performance-critical parts of your ReactJS app: This could include heavy data processing, complex UI interactions, etc.

Use the React's useEffect hook to measure the time it takes for a component to render and update. You can use the performance.mark and performance.measure methods to create a performance measurement and report it in the browser's developer tools.

Set up Jest tests to measure the performance of these components. You can use Jest's test method to write tests that measure the performance of your components and compare them against performance thresholds.

Use Jest's beforeAll and afterAll methods to run the performance tests before and after each test run, to ensure that the performance tests don't interfere with other tests.

Use Jest's expect method to make assertions about the performance of your components. For example, you could expect that a component takes no longer than a certain amount of time to render, or that its performance does not degrade over time.

Continuously monitor the performance of your ReactJS app using Jest and other performance testing tools.

Optimize the performance of your ReactJS app by making changes based on the results of your performance tests.

It's important to note that performance testing can be a complex and time-consuming process, and it's best to approach it incrementally, starting with the most critical parts of your app and expanding your performance tests as needed.
