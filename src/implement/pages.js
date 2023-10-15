import React, { Component, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { debug } from "./module/debug.js";

import axios from "axios";
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.headers.common['X-CSRFToken'] = Cookies.get("csrftoken");
axios.defaults.withCredentials = true;


// login, logout function sample.
async function PostLogin(username, password)
{
    // const response = await axios.post("http://127.0.0.1:8000/api_auth/login/", {username, password});
    // debug(Cookies.get('csrftoken'));
    const response = await axios.post("http://127.0.0.1:8000/api_auth/login/", 
    {
        username, password
    });
    return response.data.token;
}

/// login page component.
export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: "",
        token: "",
        isLogin : false
    });
    const { register, handleSubmit } = useForm();

    async function Login(data)
    {
        const token = await PostLogin();
        setState({
            ...data,
            token: token,
            isLogin: true
        }); 
        // debug(state);
    }

    function LogOut()
    {
        setState({ isLogin: false, email: "", password: "" });
        alert('logout succeed.');
    }

    function CurrentUserInfo()
    {
        return (<div>
                user : {state.email} <br />
                token : {state.token}
            </div>);
    }

    debug("hello, world!");

    return (
    <div>
        <form onSubmit={handleSubmit(Login)}>
            email : <input {...register("email", { required: true })} />  <br />
            password :<input {...register("password", { required: true })}/>  <br />
            <input type="submit" />
        </form>

        <button onClick={LogOut}>LogOut</button>

        <CurrentUserInfo />
    </div>
    );
}
