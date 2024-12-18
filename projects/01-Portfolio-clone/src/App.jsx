import './App.css'
import { Proyectos } from './Proyectos'
import { Navbar } from './Navbar';
import {Biografia} from './Biografia'

import mediscan from './assets/mediscan.png';
import route66 from './assets/route66.png';

import { Profile } from './Profile';


export function App(){
    return(
        <body>
            <header className='Navbar'>
                <Navbar/>
            </header>
        <main>
            <section className='App-Profile'>
            <Profile/>
            </section>
            <section>
                <Biografia/>
            </section>

            <section className='App-Proyectos'>
                
                <Proyectos 
                 imagenSrc= {mediscan}
                 titulo = "MediScan"
                 contenido = "Aplicacion con redes neuronales, utlizando flutter, Python y Firebase"
                 />

                  <Proyectos 
                 imagenSrc= {route66}
                 titulo = "Route66"
                 contenido = "Proyecto universitario, donde utilize Bigdata en una empresa carwash con mas de 1 millon de datos"
                 />

            </section>
        </main>
        </body>  
    )
}