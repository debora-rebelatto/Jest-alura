import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

// Jest

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  // encontrar o botão
  const botao = screen.getByRole("button");

  // inserir um valor no input
  fireEvent.change(input, { target: { value: "João" } });

  // garantir que o input está com o valor "João"
  expect(input).toHaveValue("João");

  // clica no botão
  fireEvent.click(botao);

  // garantir que o input esteja com o foco (está ativo)
  // expect(input).toHaveFocus();

  // garantir que o input esteja vazio
  expect(input).toHaveValue("");

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  // garantir que o botão esteja desabilitado
  expect(botao).toBeDisabled();
});
