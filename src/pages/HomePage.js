import React from "react";
import { useNavigate } from "react-router-dom";



function HomePage() {

    const navigate = useNavigate();

    const routeChange = () => {
        navigate('login');

    }
    return (
        <div>
            <h1>Welcome To The Assignment Review App</h1>
            <button onClick={routeChange}>Login</button>
        </div>
    )
}

export default HomePage;