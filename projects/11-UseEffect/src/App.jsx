import { useState } from "react"
import { useEffect } from "react"

export const App = () => {

  const [Count, setCount] = useState(0)

  useEffect(() => {
    console.log('Se actualizo correctamente')
  }, [Count])
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 space-y-6 w-80">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Contador</h1>
        <h2 className="text-5xl font-bold text-center text-white glow">{Count}</h2>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setCount(Count - 1)} 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-pink-500/50"
          >
            -1
          </button>
          <button 
            onClick={() => setCount(Count + 1)} 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/50"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  )
}

