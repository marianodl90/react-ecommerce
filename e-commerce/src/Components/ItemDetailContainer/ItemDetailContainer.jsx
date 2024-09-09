

import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(parseInt(itemId))
            .then(response => {
                setProduct(response)
            })
            .catch(err => {
                console.error(err)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
