import { useState } from "react"
import { Button } from "../../components/Buttons/Button/Button"
import { ModalCreateClass } from "../../components/Modals/ModalCreateClass/ModalCreateClass"
import "./Class.scss"
export const Class = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <>
            <div className='container'>
                {/* <div className="class-content">
                    <h2>Criar turma</h2>
                    <form>
                        <Input type="text" id="nome" label="nome" />
                        <Input type="date" id="data_inicio" label="Inicio" />
                        <Input type="date" id="data_fim" label="Fim" />
                        <Button label="Cadastrar"/>
                    </form>
                </div> */}
                <div className="class-content">
                    <div className="header-content">
                        <h2>Turmas</h2>
                        <Button label="Cadastrar" action={() => setOpenModal(true)}/>
                    </div>
                    <div className="class-registered">

                    </div>
                </div>

            </div>
            <ModalCreateClass isOpen={openModal} onClose={() => setOpenModal(false)}/>
        </>
    )
}
