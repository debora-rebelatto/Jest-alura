import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

const ListaParticipantes = () => {
  const participant: string[] = useListaParticipantes();

  return (
    <div>
      <h2>Lista de Participantes</h2>
      <ul>
        {participant.map((participante) => (
          <li key={participante}>{participante}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaParticipantes;
