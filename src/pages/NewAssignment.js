import React from "react";
import { useNavigate } from "react-router-dom";



function NewAssignment() {

    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/learner-dashboard');

    }
    return (
        <>
         <p>Assignment #</p>
         <select>
            <option>First Assignment</option>
            <option>Second Assignment</option>
            <option>Third Assignment</option>
         </select>
         <p>Github URL: </p>
        <input type="text"/>
        <p>Branch: </p>
        <input type="text"/>
        <p></p>
        <input type="submit" value="Submit"/>
        <button onClick={routeChange}>Back To Dashboard</button>
        </>
    )
}

export default NewAssignment;