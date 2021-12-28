import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";


import '../register/RegularForm.css'

export default function RegularForm({accs}) {
    const { register, handleSubmit, watch, formState: { errors }, formState } = useForm({ mode: "onChange" });
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password");
    const onSubmit = data => {
        if(accs.find(acc => acc.email === data.email && acc.password === data.password)){
            accs.forEach(acc => {
                if(acc.email === data.email){
                    localStorage.setItem('currentUser', JSON.stringify({fname: acc.fname , lname: acc.lname}))
                }
            })
            navigate("/")
        }
        else {
            window.alert('Invalid login or password. See you later')
            
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="native-form">
            <h2>Sign In</h2>
            <p>
                <label htmlFor="Email" className="floatLabel">Email</label>
                <input id="email" name="email" type="text" {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true })} />
                {errors.email?.type === "required" && <span>Email is required</span>}
                {errors.email?.type === "pattern" && <span>Enter a valid email</span>}
            </p>
            <p>
                <label htmlFor="password" className="floatLabel">Password</label>
                <input id="password" name="password" type="password" {...register("password", {pattern: /^[A-z0-9]/i,  required: true, minLength: 8 })} />
                {errors.password && <span>Пароль должен содеражать латинские буквы и цифры и быть длинее 8 символов</span>}
            </p>
            <p>
                <button type="submit" value="Login" id="submit" disabled={!formState.isValid}>
                    Login
                </button>
            </p>
        </form>
    )
}