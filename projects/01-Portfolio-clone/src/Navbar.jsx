import './Navbar.css'

export function Navbar(){
    return(
        <header className="header">
            <a href="/" className="logo">LezcanoT.</a>
            <nav className='navbar-links'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    )
}