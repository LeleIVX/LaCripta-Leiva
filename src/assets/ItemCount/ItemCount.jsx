import "./ItemCount.css"
import React, {useState} from "react"
import Card from "../Card/Card.jsx"
import AddCart from "../AddCart/AddCart"

export default function ItemCount(props){
    const [count, setCount] = useState (props.initial)
    function handleAdd(){
        if (count < props.stock)
            setCount(count+1)
    }
    function handleSubstract(){
        if (count >1)
            setCount(count-1)    
    }

    return(
        <div className="contador">
            <button onClick={handleSubstract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <AddCart onAdd={props.onAdd} count ={count} ></AddCart>
        </div>
    )}

