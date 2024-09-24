
import "./Cart.css"
import {useContext} from "react"
import {CartContext} from "../../Context/CartContext"
import {Link} from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import ItemCart from "../CartItem/ItemCart"


const Cart = () => {
    const {cart, clearCart, totalQuantity, total, } = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay Items en el Carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map (p => <CartItem key={p.id} {...p}/>)}
            {cart.map (p => <ItemCart key={p.id} {...p}/>)}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={()=> clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}
export default Cart
