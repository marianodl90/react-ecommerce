import './CartWidgets.css'
import { useContext } from 'react'
import carrito from "../../assets/carrito.png"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"


const CartWidgets = () => {

    const { totalQuantity } = useContext(CartContext)

    return (

        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='CartImg' src={carrito} alt='cart-widget' />
            {totalQuantity}
        </Link>
    )
}

export default CartWidgets