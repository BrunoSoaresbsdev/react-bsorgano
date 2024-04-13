import { useState } from 'react';
import './FormRegister.css';

import FieldText from '../FieldText';
import DropDown from '../DropDown';
import Button from '../Button';

const FormRegister = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.createNewWorker({
            name,
            role,
            image,
            team,
        });
    };

    return (
        <section className='form-register'>
            <form onSubmit={formSubmitHandler}>
                <h2>Fill the fields to create collaborator's card</h2>
                <FieldText required={true} title='Name' placeholder='Insert the name' value={name} setValue={(value) => setName(value)} />
                <FieldText required={true} title='Role' placeholder='Insert the role' value={role} setValue={(role) => setRole(role)} />
                <FieldText title='Image' placeholder='Insert the image address' value={image} setValue={(image) => setImage(image)} />
                <DropDown required={true} title='Team' itens={props.teams} value={team} setSelectValue={(value) => setTeam(value)} />
                <Button>Create card</Button>
            </form>
        </section>
    );
};

export default FormRegister;
