import { atom } from "recoil";

export const listaParticipantes = atom<string[]>({
  key: "listaParticipantes",
  default: [""],
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
