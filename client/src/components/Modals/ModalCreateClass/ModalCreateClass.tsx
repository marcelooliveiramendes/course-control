import { Input } from '../../Inputs/Input/Input';
import { Select } from '../../Inputs/Select/Select';
import { LayoutModal } from '../LayoutModal/LayoutModal';
import './ModalCreateClass.scss'

interface Modal {
    isOpen: boolean;
    onClose: () => void;
}

const data = [
    { label: "Desenvolvimento Full Stack", value: "full_stack" },
    { label: "Desenvolvimento Front-End", value: "front_end" },
    { label: "Desenvolvimento Back-End", value: "back_end" },
    { label: "Engenharia de Software", value: "engenharia_software" },
    { label: "Ciência de Dados", value: "ciencia_dados" },
    { label: "Machine Learning", value: "machine_learning" },
    { label: "Desenvolvimento Mobile", value: "mobile" },
    { label: "Cibersegurança", value: "ciberseguranca" },
    { label: "Banco de Dados", value: "banco_dados" },
    { label: "Desenvolvimento de Games", value: "games" },
    { label: "Inteligência Artificial", value: "inteligencia_artificial" },
    { label: "Automação e RPA", value: "automacao_rpa" },
    { label: "Desenvolvimento para IoT", value: "iot" },
    { label: "Computação em Nuvem", value: "cloud_computing" }
];

const diasSemana = [
    { label: "Domingo", value: "domingo" },
    { label: "Segunda-feira", value: "segunda" },
    { label: "Terça-feira", value: "terca" },
    { label: "Quarta-feira", value: "quarta" },
    { label: "Quinta-feira", value: "quinta" },
    { label: "Sexta-feira", value: "sexta" },
    { label: "Sábado", value: "sabado" }
];
// const periodos = [
//     { label: "Manhã", value: "manha" },
//     { label: "Tarde", value: "tarde" },
//     { label: "Noite", value: "noite" },
// ];
  

export const ModalCreateClass = ({ isOpen = false, onClose }: Modal) => {
    if (!isOpen) return null;

    return (
        <LayoutModal onClose={onClose} title="Cadastrar">
            <form className='create-class-form'>
                <div className="row">
                    <div style={{width: '70%'}}>
                        <Input type='text' label='Nome' id='nome'/>
                    </div>
                    <div style={{width: '30%'}}>
                        <Select label='Curso' id='curso' data={data}/>
                    </div>
                </div>
                <div className="row">
                    <div style={{width: '20%'}}>
                        <Select label='Dia da semana' id='dia_semana' data={diasSemana}/>
                    </div>
                    <div style={{width: '30%'}}>
                        <Select label='Periodo' id='periodo' data={data}/>
                    </div>
                </div>
            </form>
        </LayoutModal>
    );
};
