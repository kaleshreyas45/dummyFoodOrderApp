import { useState, useContext,} from 'react';
import CartContext from '../../store/cart-context';

import './Cart.css';
const Cart = function (props) {
    const ctx = useContext(CartContext);    
    const orderHandler = function () {

    }
    const backHandler = function () {
        props.onGoBack();
    }
    return (
        <div className="cart">
            <div className="top">
               {ctx.items.length>0 ? <h1 className='your-meal'>Your Meals</h1>: <h1 className='your-meal'>Please Add Meals!</h1>}  
                <h1 className="totalAmount">Total : {ctx.totalAmount} Rs</h1>
            </div>

            <div className='divider'></div>
            <div className='cart-meal-item'>
                {ctx.items.map((meal) => {
                    return (
                        <div className='each-meal' key={meal.id}>
                            <div className='meal-heading-section'>
                                <div className='image' style={{ backgroundImage: `url(${meal.img})` }}>

                                </div>
                                <div className='info'>
                                    <h2 className='meal-heading'>{meal.name}</h2>
                                    <p className='meal-price'>Rs {meal.price} x {meal.amount}</p>
                                </div>

                            </div>
                            <div className='buttons'>
                                <div>
                                    <button onClick={()=>{
                                        ctx.addItem(meal,1)
                                    }}>+</button>
                                    <button onClick={()=>{
                                        ctx.removeItem(meal.id)
                                    }}className="remove">-</button>
                                </div>
                                <p className='total-meal-price'>Rs {meal.price * meal.amount}</p>
                            </div>
                        </div>)
                })}

            </div>
            <div className='btns'>
                <button onClick={backHandler} className="back">Go Back</button>
                {ctx.items.length > 0 && <button onClick={orderHandler} className="order">Order</button>}
            </div>

        </div>
    )
}
export default Cart;