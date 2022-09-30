import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
export default function NavBar(){
    return (
        <div className="navbar">
            <div className="menu">
                <ul>
                    <li><img src="https://cdn-icons-png.flaticon.com/128/6619/6619331.png" alt="" height={30} />
                        <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/ComoLlegar">Como llegar?</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Tips">Tips de cultivo</Link></li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
            <div className="logo">
            <Link to="/"><p>La cripta<img src="https://cdn-icons-png.flaticon.com/128/3791/3791423.png" alt="logo" height={40} width={40}></img>GrowShop</p></Link>
            </div>            
            <CartWidget></CartWidget>
        </div>
    )
}