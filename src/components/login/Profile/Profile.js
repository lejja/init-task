import React, { useEffect, useState } from "react";
import './Profile.css';
import { useHistory } from "react-router";

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    const onLogout = () => {
        localStorage.removeItem('user');
        history.push("/");
    }

    useEffect( () => {
        setUser(localStorage.getItem('user'));
        setEmail(localStorage.getItem('email'))
    }, [])
    return(
        <div className="Profile">
            <div className="header">
                <div className="title">Profile</div>
                <div className="form">
                    <h1 className="info">{user}</h1>
                    <h1 className="info">{email}</h1>
                    <button className="button" onClick={onLogout}>LOGOUT</button>
                </div>
            </div>
        </div>
    )
    
}

export default Profile;