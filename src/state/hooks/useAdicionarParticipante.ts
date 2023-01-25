import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listaParticipantes } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantes);
  const lista = useRecoilValue(listaParticipantes);
  const setErrorStateValue = useSetRecoilState(errorState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErrorStateValue("Participante já adicionado");
      setTimeout(() => {
        setErrorStateValue("");
      }, 3000);
      return;
    }
    return setLista((lista: any) => [...lista, nomeDoParticipante]);
  };
};
