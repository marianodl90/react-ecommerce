
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"


const Item = ({ id, name, price, category, img, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Precio: {price}</p>
            </section>
            <section>
                <p className="Info">Stock: {stock}</p>
            </section>
            <section>
                <p className="Info">Categoria: {category}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/product/${id}`} className='Option'>Ver detalle</Link>
            </footer>
            <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log("Cantidad agregada:", quantity)} />
        </article>
    )
}

export default Item






/*
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"

const Item = ({ id, name, price, img, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Precio: {price}</p>
            </section>
            <section>
                <p className="Info">Stock: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/product/${id}`} className='Option'>Ver detalle</Link>
            </footer>
            <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log("Cantidad agregada:", quantity)} />
        </article>
    )
}

export default Item

*/