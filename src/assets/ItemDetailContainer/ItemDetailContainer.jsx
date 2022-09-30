import React, {useState, useEffect} from "react";
import Card from "../Card/Card.jsx"
import getItems, {getAnItem}from "../Items/Items.js";
import "../ItemList/ItemList.css"
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){
    const [item, setItem]= useState({});
    const { id } = useParams();

    useEffect(()=> {
    getAnItem(id).then ((respuestaItem) => setItem(respuestaItem));
}, []);

return(
    <div className="ItmLst">
            <Card stock={item.stock} key={item.id} title={item.title} imagen={item.imagen} precio = {item.precio} initial = {item.initial}></Card>

    </div>
)

}