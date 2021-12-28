import React, {useState, useEffect} from 'react';
import RegularForm from "./register/RegularForm";

const Register = () => {

    const [accs, setAccs] = useState([   ]);


    const createAcc = (newAcc) => {
        setAccs([...accs, newAcc])
    }
    
    useEffect(() => {
        const localStorageRef = localStorage.getItem('accs')
        if (localStorageRef) {
            setAccs(JSON.parse(localStorageRef))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('accs', JSON.stringify(accs))
    });

    return (
        <div>
            <RegularForm accs={accs} createAcc={createAcc} />
        </div>
    );
};

export default Register;