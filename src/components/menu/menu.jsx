import './menu.scss'

const Menu = ({ setMenuOpen, menuOpen}) => {
    return (
        // if menunOpen is true it will add active class this is set in TopBar component. 
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li>
                    <a href="#intro">Intro</a>
                </li>

                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li>
                    <a href="#works">Works</a>
                </li>

                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
        </div>
    )
}

export default Menu
