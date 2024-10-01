import React from "react"

const Modal = ({ isOpen, onClose, orderId }) => {
    if (!isOpen) return null

    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <h2>¡Compra Exitosa!</h2>
                <p>Tu código de compra es: {orderId}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
}

const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
}

export default Modal