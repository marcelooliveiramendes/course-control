import './Select.scss'

interface Options {
    label: string;
    value: string;
}

interface Input {
    label: string;
    id: string;
    data: Array<Options>;
}
export const Select = ({ label, data, id }: Input) => {
    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} > 
                {data.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
