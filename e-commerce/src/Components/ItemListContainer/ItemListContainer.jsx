
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import getProducts from "../asyncMock"
import { useParams } from "react-router-dom"
import {GridLoader} from "react-spinners"
import ItemCount from "../ItemCount/ItemCount"
/*import { getItems } from "../../Firebase/db"*/


function ItemListContainer () {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
       const filterItems = (products) => {
            const filterProducts = products.filter((prod)  => prod.category.toLowerCase() === categoryId)
            setItems(filterProducts)
        }
        getProducts().then(res => {
           if(!categoryId){setItems(res)
            setLoading(false)
        } else{
            filterItems(res)
            
        }
        })

       /*getItems(setItems)*/
    }, [categoryId])

    if(loading){
        return <GridLoader />
    }
    return (
        <ItemList items={items}/>
        
    )

}


export default ItemListContainer















































/*

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
*/