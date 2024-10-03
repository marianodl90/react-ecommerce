


const Item = ({ name, price, quantity }) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <section>
                <p className="Info">Cantidad solicitada: {quantity}</p>
            </section>
            <section>
                <p className="Info">Precio: ${price}</p>
            </section>
        </article>
    )
}

export default Item

