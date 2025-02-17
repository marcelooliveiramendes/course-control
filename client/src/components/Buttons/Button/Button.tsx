import './Button.scss'

interface Button{
  label: string;
  action?: () => void;
}
export const Button = ({label, action}: Button) => {
  return (
    <button onClick={action} type='button' className='btn'>
        {label}
    </button>
  )
}
