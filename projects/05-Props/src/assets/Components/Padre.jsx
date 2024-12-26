import { useState } from "react"
import { Persona } from "./Persona"
import { Hobbie } from "./Hobbie"


export const Padre = () => {
    const Alumno = {
        nombre: 'Jose Garcia',
        edad: 16,
        escuela: 'Ing. Sistemas',
        dni: '75896',
        estado: 'Soltero'
    }

    const Hobbies =['Cantar','Bailar','Programar','Dibujar']

    const [alumno, setalumno] = useState(Alumno)
    const [hobbies , sethobbies] = useState(Hobbies)

    //Funcion para agregar un nuevo hobbie
    const NewHobby=(newhob)=>{
        sethobbies([...hobbies, newhob])
    }

  return (
    <div>
        <h1>
            Aprendientod los props
        </h1>
        <Persona alumno={alumno} NewHobby={NewHobby}  />
        <h2>Sus Hobbies</h2>
        <Hobbie hobbies={hobbies}/>
    </div>
  )
}
