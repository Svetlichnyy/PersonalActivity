import React, { useState , useEffect } from 'react';
import LoginForm from './Login/LoginForm'

const Login = () => {
    const [accs,setAccs] = useState([])

    
    useEffect(() => {
        const localStorageRef = localStorage.getItem('accs')
        if (localStorageRef) {
            setAccs(JSON.parse(localStorageRef))
        }
    }, []);


    return (
        <div>
            <LoginForm accs={accs} />
        </div>
    );
};

export default Login;