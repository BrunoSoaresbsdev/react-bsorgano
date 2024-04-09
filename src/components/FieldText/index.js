import './FieldText.css';

const FieldText = (props) => {
    const getInputValue = (event) => {
        props.setValue(event.target.value);
    };

    return (
        <div className='field-text'>
            <label htmlFor='name'>{props.title}</label>
            <input value={props.value} onChange={getInputValue} required={props.required} id='name' type='text' placeholder={props.placeholder} />
        </div>
    );
};

export default FieldText;
