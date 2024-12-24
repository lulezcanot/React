import './App.css'
import { Proyectos } from './Proyectos'
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import {Biografia} from './Biografia'
import {Bio} from './Bio'
import {Hobbies} from './Hobbies'
import {Redes} from './Redes'


import mediscan from './assets/mediscan.png';
import route66 from './assets/route66.png';





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

            <section>
                <Bio/>
            </section>

            <section>
                <Hobbies/>
            </section>
            <section>
                <Redes
                Link="linkedin.com/in/luis-lezcano-tirado-66b4b5285/"
                Icono="linkedin"
                Red="Lulezcanot"
                />
                <Redes
                Link="facebook.com/luisramon.tiradolezcano/"
                Icono="facebook"
                Red="Luis Lezcano Tirado"
                />
                <Redes
                Link="instagram.com/luis_lezcanot/"
                Icono="instagram"
                Red="Lulezcanot"
                />
                <Redes
                Link="github.com/lulezcanot"
                Icono="github"
                Red="Lulezcanot"
                />
            </section>
        </main>
        </body>  
    )
}