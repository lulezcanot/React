import React, { useState } from 'react'
import axios from 'axios'
import { CardStarwar } from './cardStarwar'

export const Api = () => {

  const [data, setdata] = useState([])
  const [name, setname] = useState("")


  const url = `https://swapi.py4e.com/api/people/?search=${name}`;

  const burscarNombre = (event) => {
    if(event.key === 'Enter'){
        axios.get(url)
      .then(response => {
        setdata(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => {
        console.error('Error al consumir la API:', error)
      })
      setname("")
  }
}

  return (
    <div className='text-white pt-10 place-items-center'>
        <div>   
        <input type="text" 
        value={name} 
        onChange={(event)=>{setname(event.target.value)}}
        onKeyDown={burscarNombre}
        className='h-10 w-[300px] text-black'
        />
        </div>

        <CardStarwar personajedata={data} />
        
    </div>
  )
}

