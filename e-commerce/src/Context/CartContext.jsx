
import { createContext, useState, useContext } from "react";


export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})
export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart([...cart, item]) 

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    const quantityAdded = (price, quantity) => {price * quantity}
      
    

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity, quantityAdded, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

// clase 7 ejemplo del profe 

/*import { createContext, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

*/


/*
export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0

})

*/