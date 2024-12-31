import { data } from "autoprefixer"



export const CardStarwar = ({ personajedata }) => {
  return (
    <div className="grid grid-cols-4">
      {personajedata.length > 0 ? (
        personajedata.map((personaje, index) => (
          <div key={index} className="bg-slate-500 text-white p-4 m-2 rounded shadow-md">
            <h1 className="text-xl font-bold">{personaje.name}</h1>
            <p>Altura: {personaje.height} cm</p>
            <p>Peso: {personaje.mass} kg</p>
            <p>Color de ojos: {personaje.eye_color}</p>
            <p>Género: {personaje.gender}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};