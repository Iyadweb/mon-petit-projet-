import React from "react";  
import { useState } from "react";
import Avatar from '../assets/images/photo-avatar-mini.jpg'
const Profile = () => {
    const [monProfile, setMonProfile]= useState({
        firstname : "Iyad",
        lastname : "AL Bouni",
        job: "Etudiant ISTQB",
        city: "Lille"
    })

    const {firstname, lastname, job, city} = monProfile

    return (
        <>
        <img src={Avatar} alt="photo" />
        <div id="profile">
    <h1> {firstname} {lastname}</h1>
    <h2>{job}</h2>
    <h2>{city}</h2>
    </div>

        </>
        
    )
}

export default Profile