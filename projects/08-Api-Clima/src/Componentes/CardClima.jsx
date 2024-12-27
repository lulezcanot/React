import { data } from "autoprefixer"

export const CardClima = ({weatherData}) => {
  return (
    <div>
        {weatherData.weather ? (
        <div className="bg-slate-700 w-[700px] h-[500px] rounded-3xl shadow-md text-white place-self-center">
        <header>
            <h1 className="text-3xl text-bold text-center pt-5">
                {weatherData.name}, {weatherData.sys.country}
            </h1>
            <img src="src/Img/clima.png" alt="" className="w-44 h-44 place-self-center" />
            
        </header>
        <div className="text-center text-bold">
            <h2 className="text-5xl ">
                {weatherData.main.temp}°C
            </h2>
            <h3 className="text-2xl pt-4"> 
                Cordenadas
            </h3>
            <span className="p-4">
                Lat: {weatherData.coord.lat}
            </span>
            <span className="p-4">
                Lon: {weatherData.coord.lon} 
            </span>
        </div>
    </div>
        ):null}
    </div>
  )
}
