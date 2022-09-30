import "./card.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx"
import AddCart from "../AddCart/AddCart.jsx"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Card(props){
    let {precio, title, imagen,stock, initial,id} = props;
    
    function onAddCart(count){
        const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: <p>Agregaste {count} producto/s a tu carrito</p>,
    })    };
        const UrlDetail = `/detail/${id}`;
    return(
        <div className="card">
            <img src={imagen} alt="" height={150} width={70}/>
            <h4>{title}</h4>
            <p>${precio}</p>
            <ItemCount stock = {stock} onAdd={onAddCart} initial={initial}></ItemCount>
            <Link to={UrlDetail}>Ver más</Link>
        </div>
    )
}

