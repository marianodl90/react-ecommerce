import  getProductsByCategory from "../asyncMock"
import getProducts from "../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        const filterItems = (prod) => {
            const filterProd = prod.filter(pr => pr.category === categoryId)
            setProducts(filterProd)
           
        }

    

        asyncFunc(categoryId)
        .then(response => {  
            if(!categoryId){
                setProducts(response)
            }    
            else {
                filterItems(response)
            }
        })
       
            
    }, [categoryId])

    return (
        <div className="containerIL">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer