import { useState } from 'react';
import Banner from './components/Banner';
import FormRegister from './components/FormRegister';

function App() {
    const [workers, setWorkers] = useState([]);

    const createWorker = (worker) => {
        setWorkers([...workers, worker]);
    };

    return (
        <>
            <Banner />
            <FormRegister createNewWorker={(worker) => createWorker(worker)} />
        </>
    );
}

export default App;
