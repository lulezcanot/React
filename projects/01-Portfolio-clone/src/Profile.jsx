import './Profile.css'
import ProfileImg from './assets/Lezcanoimg.jpg';


export function Profile(){
    return(
        <section className='Profile'>
            <div className='Text-Intro'>
                <p>Hola, soy un Desarrollador y Analista de Datos en Peru!</p>
            </div>
                <div className="profile-card">
                    <div className='Profilecard-text'>
                        <h1 className='Profilecard-h1'>
                            Luis Lezcano T.
                        </h1>
                        <span className='Profilecard-span'>
                            (Analista / Desarrollador / Diseñador)
                        </span>
                    </div>
                    <img className='Profile-Img' src={ProfileImg} alt="Lezcano" />
                </div>
                
        </section>
    )
}