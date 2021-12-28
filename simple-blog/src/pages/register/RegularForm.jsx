import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import './RegularForm.css'

export default function RegularForm({accs, createAcc}) {
    const { register, handleSubmit, watch, formState: { errors }, formState } = useForm({ mode: "onChange" });
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password");
    const onSubmit = data => {
        if(accs.find(acc => acc.email === data.email)){
            window.alert('Аккаунт зарегистрирован, попробуйте войти')
            navigate("/login")
        }
        else {
            createAcc({
                fname : data.fname,
                lname : data.lname,
                email : data.email,
                password : data.password,
                id: Date.now()
            })
            navigate("/login")
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="native-form">
            <h2>Sign Up</h2>
            <p>
                <label htmlFor="First_Name" className="floatLabel">First Name</label>
                <input id="fname" name="fname" type="text" {...register("fname", { required: true })} />
            </p>
            <p>
                <label htmlFor="Last_Name" className="floatLabel">Last Name</label>
                <input id="lname" name="lname" type="text" {...register("lname", {required: true })} />
            </p>
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
                <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
                <input id="confirm_password" name="confirm_password" type="password" {...register("confirm_password", { validate: value => value === password.current })} />
                {errors.confirm_password && <span>Your passwords do not match</span>}
            </p>
            <p>
                <button type="submit" value="Create My Account" id="submit" disabled={!formState.isValid}>
                    Create My Account
                </button>
            </p>
        </form>
    )
}