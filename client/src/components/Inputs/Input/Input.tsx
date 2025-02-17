import './Input.scss'

interface Input {
    label: string;
    type: string;
    id: string;

}
export const Input = ({ label, type, id }: Input) => {
    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} />
        </div>
    )
}
