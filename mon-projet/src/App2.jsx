import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.jsx'

function App() {
//MAUVAISE PRATIQUE
  //let prenom ="Iyad"
  //let nom = "AL Bouni"
  //Bonne Pratique
  const[prenom, setPrenom]=useState("Iyad")
  const [nom,setNom]=useState("AL Bouni")
  const[Age,setAge]= useState(32)
  function augmenteAge () {
    setAge (Age + 1)
  }
  function diminueAge () {
    setAge (Age - 1)
  }
  const[Adresse, setAdresse]=useState("Neuville-en-Ferrain")
  function changePrenomNom(){
setPrenom("Marc")
setNom("DeMarliavre")
setAge("25")
setAdresse("Douai")


  }

  return (
    //jsx = JavaScript XML
    
    <>
      <h1>Bonjour {prenom} {nom} Vous avez l'age de {Age} ans et vous habitez à {Adresse}</h1>
      <button onClick={changePrenomNom}>Change le prénom le nom l'âge et l'adresse</button>
      <h2>Vous avez l'âge de {Age} ans </h2>
      <button onClick = {augmenteAge}>+</button>
      <button onClick={diminueAge}>-</button>

    </>
  )
}

export default App

