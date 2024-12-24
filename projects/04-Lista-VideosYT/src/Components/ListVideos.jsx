import { useState } from "react"
import { ItemVideos } from "./ItemVideos"


export const ListVideos = () => {

    //Arreglo de Videos
    const Videos=[
        {
            id: 1,
            titulo: 'Aprendiendo react desde 0',
            descripcion: 'En este video aprenderas react desde 0',
            url: 'https://youtu.be/7iobxzd_2wY?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29'
        },
        {
            id: 2,
            titulo: 'Aprendiendo javascript desde 0',
            descripcion: 'Este es el curso de javascript desde cero a experto',
            url: 'https://youtu.be/z95mZVUcJ-E'
        },
        {
            id: 3,
            titulo: 'Aprendiendo html desde 0',
            descripcion: 'Este es el curso de HTML desde cero que vas a terminar.',
            url: 'https://youtu.be/kN1XP-Bef7w'
        }
    ]
    
    const [arrayVideo, setArrayVideo] = useState(Videos)


  return (
    <>
    <div className="bg-slate-900 h-screen text-white">
        <h1 className="text-4xl flex justify-center font-bold">Lista de Videos</h1>
    
    <div className="grid grid-cols-3 gap-2">
        {
            arrayVideo.map((video)=>(
                <ItemVideos video={video} setArrayVideo={setArrayVideo} />
            ))
        }
    </div>
        

    </div>
    
    </>
  )
}
