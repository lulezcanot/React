

export function Proyectos({imagenSrc,titulo,contenido}){
    return(
        <div className='card'>
            <img className='card-img' src={imagenSrc} alt={titulo} />
            <div className='card-text'>
                <strong className='card-titulo'> {titulo}</strong>
                <p className='card-texto'>{contenido}</p>
            </div>
        </div>   
    )
}