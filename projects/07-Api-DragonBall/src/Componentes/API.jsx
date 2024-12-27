import { useEffect, useState } from "react"
import axios from "axios";
import { ItemPersonaje } from "./ItemPersonaje";

export const API = () => {

    const [data, setdata] = useState([])

    //HOOK USESEFFECT
    useEffect(() => {
        //Funcion para consumar la API

        //Pasos para axios
        //1. Peticion[get,put,post,delete]
        //2. URL[API]
        //3. THEN -> Respuesta de la data catch -> respuesta a los Errores
        axios.get('https://dragonball-api.com/api/characters')
        .then(response=>{
            setdata(response.data.items)
        }).catch(error=>{
            console.log("Error al consumir la API:", error)
        })
    }, [])

  return (
    <>
        <div className="bg-slate-900 h-auto text-white">
            <header className="p-10 w-full">
            <h1 className="flex justify-center text-4xl font-bold">API DRAGON BALL</h1>
            </header>
        
            <body>
                <div className="grid grid-cols-3 gap-2">
                    {
                        data.map((personaje)=>(
                            <ItemPersonaje key={personaje.id} personaje={personaje} />
                        ))
                    }
                </div>
            </body>
        </div>
    </>
  )
}
