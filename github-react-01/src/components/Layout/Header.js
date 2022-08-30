import React, { useCallback } from "react"
import CartContext from '../../store/cart-context'
import { useContext } from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
function Header(props) {
    const ctxContext = useContext(CartContext);
    const cartItems = ctxContext.items.reduce(useCallback((acc,curr)=>{
        return acc + curr.amount
    }),0)
    function changeContent(){
        props.onAdd();
    }
    return (
        <React.Fragment>
            <header className="header">
                <h1>Meals</h1>
                <button className="cart-button" onClick={changeContent}><FontAwesomeIcon icon={faCartShopping} className="icon"></FontAwesomeIcon>Your Cart <div className="badge">{cartItems}</div></button>
            </header>           
        </React.Fragment>
    )
}


export default Header;