import { useState } from 'react';
import Banner from './components/Banner';
import FormRegister from './components/FormRegister';
import Team from './components/Team';

function App() {
    const teams = [
        {
            name: 'Front-End',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9',
        },
        {
            name: 'Back-End',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF',
        },
        {
            name: 'Data Science',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8',
        },
        {
            name: 'Devops',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5',
        },
        {
            name: 'UI/UX',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9',
        },
        {
            name: 'Mobile',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF',
        },
    ];

    const teamsNames = teams.map(team => team.name);

    const [workers, setWorkers] = useState([]);

    const createWorker = (worker) => {
        setWorkers([...workers, worker]);
    };

    return (
        <>
            <Banner />
            <FormRegister teams={teamsNames} createNewWorker={(worker) => createWorker(worker)} />
            {teams.map((team) => (
                <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} collaborators={workers.filter(collaborator => collaborator.team === team.name)}/>
            ))}
        </>
    );
}

export default App;
