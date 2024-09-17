import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <>
        {items.map((item)=> <Item key={item.id} {...item}></Item>)}
        </>
    )
}

export default ItemList


