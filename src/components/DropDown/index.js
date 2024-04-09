import './DropDown.css';

const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.title}</label>
            <select onChange={event => props.setSelectValue(event.target.value)} required={props.required} value={props.value}>
                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
