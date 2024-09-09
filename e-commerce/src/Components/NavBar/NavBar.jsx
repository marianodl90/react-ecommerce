import {NavLink, Link} from "react-router-dom"
import CartWidgets from "../CartWidgets/CartWidgets"
import cruz1 from "../../assets/cruz1.jpg"
import './NavBar.css'


const NavBar = () => {

    return (
        <>
            <nav className="navegador">
                <div className="container">
                    
                    <Link to='/'>
                    <img src={cruz1} alt="magen de logo" />
                    </Link>
                    <div className="categories">
                        <NavLink to={`/category/rosarios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Rosarios</NavLink>
                        <NavLink to={`/category/denarios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Denarios</NavLink>
                        <NavLink to={`/category/medallas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Medallas</NavLink>
                        <NavLink to={`/category/estampitas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Estampitas</NavLink>
                        <NavLink to={`/category/libros`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Libros</NavLink>
                    </div>
                    <div>
                        <CartWidgets />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar