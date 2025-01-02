
import { useState } from 'react'
import './App.css'

const listaInicial = [
  {
    id: 1,
    texto: 'Comer'
  },
  {
    id: 2,
    texto: 'Entrenar'
  },
  {
    id: 3,
    texto: 'Estudiar'
  }
]
function App() {
  const [items, setitems] = useState(listaInicial)

  const handleSubmit = (event) => {
    event.preventDefault()

    const {elements} = event.target
    const input = elements.namedItem('item')

    const newItem = {
      id: items.length + 1,
      texto: input.value
    }
    setitems((nuevo) => [...nuevo, newItem]);
    input.value = '';
  }
  return (
    
      <main>
        <aside>
          <h1>Prueba Tecnica de React</h1>
          <h2>Añadir y Eliminar elementos</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Elemento a Introducir
              <input
              name='item'
              required
              type='text'
              placeholder='Lista'/>
            </label>
            <button>Añadir elementos a la Lista</button>
          </form>
        </aside>

        <section>
          <h2>Lista de Elementos</h2>
          <ul>
            {
              items.map(item =>{
                return(
                  <li key={item.id}>
                    {item.texto}
                    <button onClick={()=>{
                      setitems(nuevo =>
                        nuevo.filter(elemento => elemento.id !== item.id))
                    }}>
                      Eliminar Elemento
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </main>
  )
}

export default App
