import { atom } from "recoil";

export const listaParticipantes = atom<string[]>({
  key: "listaParticipantes",
  default: [""],
});
