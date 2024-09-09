import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {

    
        getProductById(itemId)
        .then(response => {
        setProduct(response)
        })
        .catch(err => {
            console.error(err)
        })
    }, [itemId])

  return (
    <ItemDetail product={product} />
  )

}

export default ItemDetailContainer