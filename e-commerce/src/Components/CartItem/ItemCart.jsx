
const Icart = ({quantityAdded, price, quantity}) => {

    quantityAdded = price * quantity

    return (
        <article className="CardItem">
            <section>
            <p className="Info">Subtotal: ${quantityAdded}</p>
            </section>
        </article>
    )
}

   
   export default Icart
   