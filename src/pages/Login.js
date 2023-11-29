import React from "react";
import { useNavigate } from "react-router";

function Login() {

    const navigate = useNavigate();
    
    const routeChange = () => {
        navigate('/learner-dashboard');
    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={routeChange}>
                <p>Username: </p>
                <input type="text"/>
                <p>Password: </p> 
                <input type="password"/>
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </>
    )
}

export default Login;