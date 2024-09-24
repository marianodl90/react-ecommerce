import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { getSingleItem } from "../../Firebase/db"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        /*getProductById(parseInt(itemId))
            .then(response => {
                setProduct(response)
            })
            .catch(err => {
                console.error(err)
            })*/

            getSingleItem(itemId, setProduct)
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer



