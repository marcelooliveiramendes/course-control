import { HomeButton } from '../../components/Buttons/HomeButtons/HomeButtons'
import './Home.scss'

export const Home = () => {
  return (
    <div className='container'>
        <h1>Selecione o que deseja fazer</h1>
        <div id="routes-btns">
            <HomeButton label='Chamada' route="/"/>
            <HomeButton label='Turmas' route="/class"/>
            <HomeButton label='Alunos' route="/"/>
        </div>
    </div>
  )
}
