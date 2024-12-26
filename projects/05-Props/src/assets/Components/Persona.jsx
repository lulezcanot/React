import { InfoUniversidad } from "./infoUniversidad"


export const Persona = ({alumno, NewHobby}) => {

  return (
    <div>
        <h3>Nombre : {alumno.nombre}</h3>
        <h3>Edad : {alumno.edad}</h3>
        <h3>Estado : {alumno.estado}</h3>
        <h3>DNI : {alumno.dni}</h3>
        <button onClick={()=>NewHobby('Ver Videos')}>Agregar hobbi</button>
        <InfoUniversidad escuela = {alumno.escuela} />
    </div>
  )
}
