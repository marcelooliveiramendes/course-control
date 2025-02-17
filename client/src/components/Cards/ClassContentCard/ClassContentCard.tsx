import "./ClassContentCard.scss";
import trash from './../../../images/svg/trash.svg'

interface ClassContentCard {
  materia: string;
  id: number;
  dias: number;
  deleteFunction?: () => void;
}

export default function ClassContentCard({
    materia,
    id,
    dias,
    deleteFunction,
}: ClassContentCard) {
    return (
      <div key={id} className="class-content-card">
        <p>{materia}</p>
        <p>{dias} dias</p>
        <button onClick={deleteFunction}>
          <img src={trash} />
        </button>
      </div>
    );
}
