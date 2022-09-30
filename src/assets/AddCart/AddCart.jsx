import "./AddCart.css"
import ItemCount from "../ItemCount/ItemCount.jsx";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React, {useState} from "react";
import Card from "../Card/Card.jsx";

/*const MySwal = withReactContent(Swal)
    
function agregar_carrito(){
  
    MySwal.fire({
        title: <p>Agregaste {} productos a tu carrito</p>,
    })
}*/

export default function AddCart(props){
    return(
        <div>
            <button className="btn-añadir" onClick={()=>props.onAdd(props.count)}>Agregar al carrito</button>
        </div>
    )
}