import "./Checkout.css"
import { useState } from 'react'
import { serverTimestamp } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { createOrder } from "../../Firebase/db"
import Modal from '../Modal/Modal'

const Checkout = () => {
    const { cart, total } = useCartContext()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { clearCart } = useCartContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const phone = e.target.phone.value
        const email = e.target.email.value

        const order = {
            buyer: { name, phone, email },
            items: cart,
            date: serverTimestamp(),
            total: total,
        }

        const id = await createOrder(order)
        setOrderId(id)
        clearCart()
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setOrderId(null)
    }


    return (
        
            <div className="CompraC">
                <h2>Resumen de la compra</h2>
                {cart.map(item => <form key={item.id}>{item.name} x {item.quantity}</form>)}
                <h2>Datos del Cliente</h2>
                <div>
                    <form onSubmit={handleSubmit} className='FormContainer'>
                        <input className="input" type="text" id="name" name="name" placeholder="Ingrese su nombre..." required />
                        <input className="input" type="phone" id="phone" name="phone" placeholder="Ingrese su telefono..." required />
                        <input className="input" type="email" id="email" name="email" placeholder="Ingrese su correo..." required />
                        <button className="input" type="submit" id="submit">Finalizar compra</button>
                    </form>
                </div>

                <Modal isOpen={isModalOpen} onClose={closeModal} orderId={orderId} />
            </div>
       
    )
}

export default Checkout
