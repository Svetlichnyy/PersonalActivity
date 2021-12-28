import React, { useRef } from 'react';
import { useForm } from "react-hook-form";

import '../../pages/register/RegularForm.css'

export default function RegularLogin() {
    const { register, handleSubmit, watch, formState: { errors }, formState } = useForm({ mode: "onChange" });
    const password = useRef({});
    password.current = watch("password");
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="native-form">
            <h2>Sign Up</h2>
            <p>
                <label htmlFor="Email" className="floatLabel">Email</label>
                <input id="email" name="email" type="text" {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, required: true })} />
                {errors.email?.type === "required" && <span>Email is required</span>}
                {errors.email?.type === "pattern" && <span>Enter a valid email</span>}
            </p>
            <p>
                <label htmlFor="password" className="floatLabel">Password</label>
                <input id="password" name="password" type="password" {...register("password", { required: true, minLength: 8 })} />
                {errors.password && <span>Enter a password longer than 8 characters</span>}
            </p>
            <p>
                <input type="submit" value="Create My Account" id="submit" disabled={!formState.isValid} />
            </p>
        </form>
    )
}