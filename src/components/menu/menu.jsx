import './menu.scss'

const Menu = ({ setMenuOpen, menuOpen}) => {
    return (
        // if menunOpen is true it will add active class this is set in TopBar component. 
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
        </div>
    )
}

export default Menu
