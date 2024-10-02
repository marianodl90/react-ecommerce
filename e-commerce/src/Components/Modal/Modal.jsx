
import React from "react"


const Modal = ({ isOpen, onClose, orderId }) => {

    if (!isOpen) return null




    return (
        <div className="ModalStyle">
            <div className="modalContentStyle">
                <h2>¡Compra Exitosa!</h2>
                <p>Tu código de compra es: {orderId}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}
    
    export default Modal