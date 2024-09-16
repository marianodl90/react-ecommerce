import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <>
        {items.map((item)=> <Item key={item.id} {...item}></Item>)}
        </>
    )
}

export default ItemList



/*

import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {

    return (
        <div className="ListGroup">
            {products.map((prod) => <Item key={prod.id} {...prod}></Item>)}
        </div>
    )
}

export default ItemList
*/