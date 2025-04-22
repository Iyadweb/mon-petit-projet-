import React from "react";  
import { useState } from "react"; 
import HTML from "../assets/images/logo-html5.png"
import CSS from "../assets/images/logo-css.png"
import JS from "../assets/images/logo-js.png"
import Python from "../assets/images/python.png"
import REACT from "../assets/images/logo-react.jfif"
const Languages = () => {
    const [mesLangues,setMesLangues] = useState({
        firstLanguage : "JavaScript",
        secondLanguage: "Python",
        thirdLanguage: "React"




    })
    const{firstLanguage, secondLanguage, thirdLanguage} = mesLangues

    return (
    <>
    <h1>Les languages</h1>
    <div id= "languages">
    <h2>Langues de programmation que j'utilise: {firstLanguage}, {secondLanguage} et {thirdLanguage}</h2>
    <img src={HTML} alt="" />
    <img src={CSS} alt="" />
    <img src={JS} alt=""/>
    <img src={Python} alt="" />
    <img src={REACT} alt=""/>
    </div>
    </>
    )

    
}

export default Languages
