import './FieldText.css';

export const FieldText = (props) => {
    return (
        <div className='field-text'>
            <label htmlFor='name'>{props.title}</label>
            <input id='name' type='text' placeholder={props.placeholder} />
        </div>
    );
};
