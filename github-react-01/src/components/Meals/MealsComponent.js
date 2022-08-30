import React, { useState, useContext, useRef } from 'react';
import './MealsComponent.css';
import CartContext from '../../store/cart-context'

const MealsComponent = function (props) {
    const ctx = useContext(CartContext);
    const [initial, setInitial] = useState(true);
    const enteredAmount = useRef(null);
    const formSubmitHandler = function (e) {
        e.preventDefault();

        let currentAmount = enteredAmount.current.value;
        let currentAmountNumber = +currentAmount;
        if (currentAmount.length === 0 || currentAmountNumber < 1 || currentAmountNumber > 5) {
            console.log(currentAmount.length);
            setInitial(false);
            return;
        }
        else {
            const data = {
                id: props.mealID,
                name: props.mealName,
                price: props.mealPrice,
                amount: currentAmountNumber,
                img:props.mealSrc
            }
            ctx.addItem(data,data.amount);
        }
        enteredAmount.current.value = "";

    }
    // console.log(props);
    return (

        <div className="meal-component">
            <div className="img-heading-desc">
                <div className='img' style={{
                    backgroundImage: `url(${props.mealSrc})`

                }}></div>
                <div className="heading-desc">
                    <h1>{props.mealName}</h1>
                    <p>{props.mealDesc}</p>
                    <h3>Rs {props.mealPrice}</h3>
                </div>


            </div>
            <div className='form'>
                <form className='add' onSubmit = {formSubmitHandler}>
                    <input ref={enteredAmount} type="number" min="1" max="5" step="1"></input>
                    <button type='submit' value="submit">Add</button>
                    {!initial && <p style={{position:"absolute",top:"91%",left:"-48px",width:"200%",fontWeight:"bolder",color:"red",fontSize:"11px"}}>Please enter number between 1 to 5</p> }
                  
                </form>
                
            </div>
        </div>
    );
}
export default MealsComponent;