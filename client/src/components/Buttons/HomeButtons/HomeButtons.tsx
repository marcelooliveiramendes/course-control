import { Link } from 'react-router'
import './HomeButtons.scss'

interface HomeButtons{
    label: string
    route: string
    action?: () => void
}
export const HomeButton = ({label, route}: HomeButtons) => {
  return (
    <Link to={route}>
        <button className='link-home-btn'>
            {label}
        </button>
    </Link>
  )
}
