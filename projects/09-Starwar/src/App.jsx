import { Api } from "./Componentes/Api"



function App() {


  return (
    <>
      <div className='bg-slate-800 h-screen'>
        <h1 className='text-4xl text-center text-white font-bold p-5'>Lista de Personas StarWars</h1>
        <Api />
      </div>
    </>
  )
}

export default App
