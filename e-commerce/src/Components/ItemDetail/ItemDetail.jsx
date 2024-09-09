import { Link } from "react-router-dom"
import {CartContext} from "../../Context/CartContext"
import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({product}) => {

    const [quantityAdded, setQuantityAdded] = useState()

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{product?.name}</h2>
            </header>
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg"></img>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
                <p className="Info">
                    Descripcion: {product?.description}
                </p>
                <p className="Info">
                    Precio: {product?.price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to= '/cart' className="Option">Terminar compra</Link>
                    ) :(
                        <ItemCount stock={product?.stock} initial={1} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail