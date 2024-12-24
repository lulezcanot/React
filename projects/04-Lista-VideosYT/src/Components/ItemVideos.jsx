import ReactPlayer from "react-player"

export const ItemVideos = ({video, setArrayVideo}) => {

    const DeleteVideo = () =>{
        setArrayVideo(videos => videos.filter(v=>v.id !==video.id))
    }

  return (
    <>
    <div className="bg-slate-600 max-w-md w-full p-10 rounded-3xl">
        <header className="flex justify-between">
            <h1 className="font-bold text-2xl">{video.titulo}</h1>
            <button onClick={DeleteVideo} className="bg-red-600 text-white rounded-lg font-bold p-2">X</button>
        </header>
        <p>
            {video.descripcion}
        </p>
        <ReactPlayer url={video.url} width="100%" />
    </div>
    
    </>
  )
}

