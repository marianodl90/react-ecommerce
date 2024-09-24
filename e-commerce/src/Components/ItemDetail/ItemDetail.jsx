
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { GridLoader } from "react-spinners"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)


        const item = {
           id, name, price
        
        }
        addItem(item, quantity)
    }

    if (!id) return <GridLoader />

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoria: {category}</p>
                <p className="Info">Descripcion: {description}</p>
                <p className="Info">Precio: ${price}</p>
            </section>

            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option">Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail


