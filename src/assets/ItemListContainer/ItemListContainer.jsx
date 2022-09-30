import React from "react"
import ItemList from "../ItemList/ItemList.jsx"
import "./ItemListContainer.css"
import getItems from "../Items/Items.js";
import "../../App"


export default function ItemListContainer (props){
    return(
        <div>
            <h3>{props.greeting}</h3>
            <div className="productos">
                <ItemList data = {getItems}/>
            </div>
        </div>
    )
}