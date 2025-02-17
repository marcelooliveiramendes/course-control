import { useState } from "react";
import { ModalCreateContent } from "../../components/Modals/ModalCreateContent/ModalCreateContent";
import { Button } from "../../components/Buttons/Button/Button";
import './Contents.scss'
export const Contents = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
      <>
        <div className="container">
          <div className="class-content">
            <div className="header-content">
              <h2>Cursos</h2>
              <Button label="Cadastrar" action={() => setOpenModal(true)} />
            </div>
            <div className="class-registered"></div>
          </div>
        </div>
        <ModalCreateContent
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </>
    );
};
