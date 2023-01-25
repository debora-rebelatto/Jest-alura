import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";

const Formulario = () => {
  const [nome, setNome] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const adicicionarNaLista = useAdicionarParticipante();
  const errorStateValue = useErrorMessage();

  const adicionaParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionaParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {errorStateValue && <p role="alert">{errorStateValue}</p>}
    </form>
  );
};

export default Formulario;
