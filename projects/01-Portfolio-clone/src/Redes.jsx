
export function Redes({Link,Icono,Red}) {
    return(
        <section>
            <a href={`https://www.${Link}`}>
                <span>
                <ion-icon name={`logo-${Icono}`}></ion-icon>
                    @{Red}
                </span>
            </a>
        </section>
    )
}