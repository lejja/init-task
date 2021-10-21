import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const onLogin = () => {
        const user ={
            username: username,
            password: password
        }
        axios.post('https://api.getcountapp.com/api/v1/authenticate', user).then((response) => {
            const userInfo = response.data.user.firstName + ' ' + response.data.user.lastName;
            const email = response.data.user.email;
            localStorage.setItem('user', userInfo);
            localStorage.setItem('email', email);
            history.push("/profile");

        }).catch(() => {
            setError("Your email or password is incorrect!");
        })
    }
    return(
        <div className="Login">
            <div className="header">
                <div className="title">Login</div>
                <div className="form">
                    <div className="user-form">
                        <div className="title-form">Username</div>
                        <input className="input-form" type="email" placeholder="Type in your e-mail"
                                onChange={(data) => {setUsername(data.target.value)}}/>
                    </div>
                    <div className="password-form">
                        <div className="title-form">Password</div>
                        <input className="input-form" type="password" placeholder="Type in your password" 
                                onChange={(data) => {setPassword(data.target.value)}}/>
                    </div>
                </div>
                <div className="error">{error}</div>
                <button className="login-button" onClick={onLogin}>LOGIN</button>
            </div>
        </div>
    );
    
}
export default Login;