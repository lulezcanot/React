import { useState } from "react"
import { ListaTareas } from "./ListaTareas"
import Tarea from "./Tarea"


export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>("")
    const [listaTareas, setlistaTareas] = useState<string[]>([])

    const handleAddTask=()=>{
        if(nuevaTarea.trim()=== '') return
        setlistaTareas(tareasAnterio => [...tareasAnterio, nuevaTarea])
        setNuevaTarea('')
    }
    const handleBorrarTarea = (index:number)=>{
        setlistaTareas(tareas => tareas.filter((_,i)=>i !== index))
    }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input 
             type="text"
             value={nuevaTarea} 
             onChange={(e)=> setNuevaTarea(e.target.value)} 
             placeholder="Nueva Tarea" 
             />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}/>
        </div>
    </div>
  )
}