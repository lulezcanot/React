import { useState } from "react"
import axios from "axios"
import { CardClima } from "./CardClima"

export const Api = () => {

    const [data, setdata] = useState([])
    const [location, setLocation] = useState("")

    const API_KEY = "de994316c2ac85671112edeeeaa2c15d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}` 
    
    const searchLocation = (event) =>{
        if(event.key === "Enter"){
            axios.get(url)
            .then((response) => {
                setdata(response.data)
                console.log(response.data)
            })
            setLocation("")
        }
    }
    
    
    return (
      <>
        <div className="bg-slate-200 w-screen h-screen relative"> 
              <div className="text-center p-4">
                <input type="text" className="py-3 px-6 w-[700px]
                text-lg rounded-3xl border border-gray-200 text-gray-600
                placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
                placeholder="Escribe la Ubicacion"
                value={location}
                onChange={(event)=>{setLocation(event.target.value)}}
                onKeyDownCapture={searchLocation} />
              </div>
              <CardClima weatherData={data} />
        </div>
      </>
    )
  }