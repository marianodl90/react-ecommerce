import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <>
        <div className="ListGroup">
        {items.map((item)=> <Item key={item.id} {...item}></Item>)}
        </div>
        </>
    )
}

export default ItemList


