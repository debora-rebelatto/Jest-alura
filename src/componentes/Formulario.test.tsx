import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "João" } });
  expect(input).toHaveValue("João");
  fireEvent.click(botao);
  expect(input).toHaveValue("");
  expect(botao).toBeDisabled();
});

test("Should not have duplicate participants", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  expect(input).toBeInTheDocument();

  const botao = screen.getByRole("button");

  fireEvent.change(input, { target: { value: "João" } });
  fireEvent.click(botao);
  fireEvent.change(input, { target: { value: "João" } });
  fireEvent.click(botao);

  const errorMessage = screen.getByRole("alert");

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent("Participante já adicionado");
});
