import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listaParticipantes, textState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantes);
  const lista = useRecoilValue(listaParticipantes);
  const setErrorStateValue = useSetRecoilState(errorState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErrorStateValue("Participante já adicionado");
      return;
    }
    return setLista((lista: any) => [...lista, nomeDoParticipante]);
  };
};
