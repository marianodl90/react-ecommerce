import './CartWidgets.css'
import carrito from "../../assets/carrito.png"

const CartWidgets = () => {

    return (

    <div id="carrito">
        <img src={carrito} alt="imagen de carrito" />
        0
    </div>
    )
}

export default CartWidgets