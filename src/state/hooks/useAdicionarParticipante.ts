import { useSetRecoilState } from "recoil";
import { listaParticipantes } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantes);

  return (nomeDoParticipante: string) => {
    return setLista((lista: any) => [...lista, nomeDoParticipante]);
  };
};
