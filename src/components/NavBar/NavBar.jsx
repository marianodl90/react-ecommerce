import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/logo"
 

const NavBar = () => {

    return (
        <nav>
            <Logo />
            <ul>
                <li>Link one</li>
                <li>Link two</li>
                <li>Link three</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar