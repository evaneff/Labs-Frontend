import React from "react";
import { Link, useNavigate } from "react-router-dom";


function LearnerDashboard() {

    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/new-assignment');

    }

    return (
        <>
        <h1>Learner Dashboard</h1>
        <button onClick={routeChange}>Submit New Assignment</button>
        <Link to={'/login'}className="link">Logout</Link>
        <h2>Welcome Learner</h2>
        <fieldset>
            <legend>Needs Work</legend>
        </fieldset>
        <fieldset>
            <legend>Complete</legend>
        </fieldset>
        <fieldset>
            <legend>In Review</legend>
        </fieldset>
        </>
    )
}

export default LearnerDashboard;