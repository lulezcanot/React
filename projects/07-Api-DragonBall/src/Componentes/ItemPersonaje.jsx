

export const ItemPersonaje = ({personaje}) => {
  return (
    <div className="bg-slate-500 max-w-md w-full p-5 rounded-xl">
        <header className="flex justify-center">
        <h1 className="text-2xl font-bold">{personaje.name}</h1>
        </header>
        <body>
            <div className="flex flex-col items-center ">
            <img src={personaje.image} className="w-72 h-72 object-contain " />
            </div>
            <div className="grid grid-cols-2 gap-1">
            <h4 className="text-amber-500 font-bold">Race: </h4>
            <label htmlFor="">{personaje.race}</label>
            <h4 className="text-amber-500 font-bold mt-2">Base Ki: </h4>
            <label htmlFor="">{personaje.ki}</label>
            <h4 className="text-amber-500 font-bold mt-2">Total Ki: </h4>
            <label htmlFor="">{personaje.maxKi}</label>
            <h4 className="text-amber-500 font-bold mt-2">Affiliation: </h4>
            <label htmlFor="">{personaje.affiliation}</label>
            </div>
            
        </body>
    </div>
  )
}
