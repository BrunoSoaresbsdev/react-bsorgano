import './FormRegister.css';
import FieldText from '../FieldText';

export const FormRegister = () => {
    return (
        <section className='form-register'>
            <form>
                <h2>Fill the fields to create collaborator's card</h2>
                <FieldText title='Name' placeholder='Insert the name' />
                <FieldText title='Role' placeholder='Insert the role' />
                <FieldText title='Image' placeholder='Insert the image address' />
            </form>
        </section>
    );
};
