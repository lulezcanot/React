import { useState } from 'react'
import './App.css'

export function App(){

//HOOK USESTATE
//Sirve para manejar el estado de las variables

const [valor, setValor] = useState(0)

const Sumar10 = () => {
  setValor(valor + 10)
}
const Restar10 = () => {
  setValor(valor - 10)
}

  return (
    <>
      <h1>Contador React</h1>
      <h2>{valor}</h2>
      <button onClick={Sumar10}>+10</button>
      <button onClick={Restar10}>-10</button>
    </>
  )
}


