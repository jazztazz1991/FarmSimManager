import { useState } from 'react';
import axios from 'axios';
import instance from '../hooks/API';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
    return (
        <div className='auth'>
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies(['access_token']);

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await instance.post("/auth/login", { username, password });

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };
    return <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
    />
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await instance.post("/auth/register", { username, password });
            alert("Registration Successful");
        } catch (err) {
            console.log(err);
        }
    };
    return <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        onSubmit={onSubmit}
    />
};


const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
    return (
        <div className='authContainer'>
            <form onSubmit={onSubmit}>
                <h2> {label} </h2>
                <div className='formGroup'>
                    <label htmlFor="username">Username: </label>
                    <input
                        type='text'
                        id='username'
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }} />
                </div>
                <div className='formGroup'>
                    <label htmlFor="password">Password: </label>
                    <input
                        type='password'
                        id='password'
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                </div>

                <button type='submit'>{label}</button>
            </form>
        </div>
    );
}