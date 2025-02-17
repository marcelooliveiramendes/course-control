import { useState } from "react";
import { Button } from "../../Buttons/Button/Button";
import { Input } from "../../Inputs/Input/Input";
import { LayoutModal } from "../LayoutModal/LayoutModal";
import "./ModalCreateContent.scss";
import { randomNumber } from "../../../helpers/helpers";
import ClassContentCard from "../../Cards/ClassContentCard/ClassContentCard";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
}
interface ClassContent {
  materia: string;
  dias: number;
  id: number;
}

export const ModalCreateContent = ({ isOpen = false, onClose }: Modal) => {
    const [classContent, setClassContent] = useState<Array<ClassContent>>([]);

    if (!isOpen) return null;

    const createClassContent = () => {
        const materia = document.querySelector<HTMLInputElement>("#materia")!.value;
        const dias =document.querySelector<HTMLInputElement>("#dias_materia")!.value;

        const registered = classContent.filter(
        (item: ClassContent) => item.materia == materia
        );

        if(registered.length == 0){
            setClassContent((prevState) => [
            ...prevState,
            { materia, dias: parseInt(dias), id: randomNumber() },
            ]);
        } else {
            alert("Esta matéria já foi cadastrada");
        }

    };

    const deleteClassContent = (id: number) => {
        setClassContent((prevState) => prevState.filter((item: ClassContent) => item.id !== id));
    };

    const createCourse = () => {

    }

  return (
    <LayoutModal onClose={onClose} title="Cadastrar">
      <form className="create-class-form">
        <div className="row">
          <div style={{ width: "60%" }}>
            <Input type="text" label="Nome" id="nome" />
          </div>
          <div style={{ width: "20%" }}>
            <Input type="number" label="Duração em meses" id="meses" />
          </div>
          <div style={{ width: "20%" }}>
            <Input type="number" label="Grade Horária" id="grade" />
          </div>
        </div>
        <h3>Matérias</h3>
        <div className="row">
          <div style={{ width: "70%" }}>
            <Input type="text" label="Nome da matéria" id="materia" />
          </div>
          <div style={{ width: "30%" }}>
            <Input type="number" label="Duração em dias" id="dias_materia" />
          </div>
          <div>
            <Button label="Incluir" action={createClassContent} />
          </div>
        </div>
      </form>
      {classContent.length > 0 && (
        <>
          <br />
          <h4>Matérias cadastradas</h4>
          <div id="registered-class-content">
            {classContent.map((content) => (
              <ClassContentCard
                materia={content.materia}
                id={content.id}
                dias={content.dias}
                deleteFunction={() => deleteClassContent(content.id)}
              />
            ))}
          </div>
        </>
      )}
      <br />
      <div className="row">
        <Button label="Cadastrar" action={createCourse} />
      </div>
    </LayoutModal>
  );
};
