import { useState } from "react"


export const TodoList = () => {

    const [Tarea, setTarea] = useState(["Comer", "Dormir", "Estudiar"])
    const [newTarea, setNewTarea] = useState("")

    function inputchange(event){
        setNewTarea(event.target.value);
    }

    function addTarea(){
        if(newTarea.trim()!==""){
            setTarea([...Tarea, newTarea]);
            setNewTarea("");
        }
    }

    function deleteTarea(index){
        setTarea(Tarea.filter((_, i)=>i!==index));
    }
    
  return (
    <section className="Contenedor">
        <h1 className="Titulo">To-Do List</h1>

        <div>
            <input
            className="Input" 
            type="text" 
            placeholder="Añade tareas"
            value={newTarea}
            onChange={inputchange}/>

            <button className="Boton" onClick={addTarea}>
                Agregar
            </button>
        </div>
        
        <ol className="Listas">
            {Tarea.map((Tarea, index)=>
                <li key={index} className="ListasLI">
                    <span>{Tarea}</span>
                    <button className="BotonEliminar" onClick={()=>deleteTarea(index)}>Eliminar</button>
                </li>
            )}
        </ol>

    </section>
  )
}
