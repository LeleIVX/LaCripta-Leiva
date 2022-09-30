import React, {useState, useEffect} from "react";
import Card from "../Card/Card.jsx"
import getItems from "../Items/Items.js";
import "./ItemList.css"

export default function ItemList(){
    const [items, setItems]= useState([]);
    useEffect(()=> {
    getItems().then ((respuestaItems) =>{setItems(respuestaItems)});
}, []);

return(
    <div className="ItmLst">
{items.map ((item) => (
    <Card stock={item.stock} key={item.id} title={item.title} imagen={item.imagen} precio = {item.precio} initial = {item.initial}></Card>)
    )}
    </div>
    )
}
