
import { useReducer, } from 'react';
import CartContext from './cart-context';
const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = function (prevState, action) {
    if (action.type === "ADD") {
        const updatedTotalAmount = prevState.totalAmount + action.item.price * action.prevAmount;
        const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
        let updatedItems;
        if (existingCartItemIndex !== -1) {
            const existingCartItem = prevState.items[existingCartItemIndex];
            const updatedCartItem = { ...existingCartItem, amount: existingCartItem.amount + action.prevAmount }
            updatedItems = [...prevState.items];
            updatedItems[existingCartItemIndex] = updatedCartItem;
        }
        else {
            updatedItems = prevState.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    else if (action.type === "REMOVE") {
        const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.id);
        const existingCartItem = prevState.items[existingCartItemIndex];
        const updatedTotalAmount = prevState.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount===1){
            const newState = [...prevState.items];
            newState.splice(existingCartItemIndex,1);
            updatedItems = newState;
        }
        else{
            const updatedCartItem = { ...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...prevState.items];
            updatedItems[existingCartItemIndex] = updatedCartItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
        
       
    }
}

const CartProvider = function (props) {

    const [cartState, dispatchCartStateAction] = useReducer(cartReducer, defaultState)
    const addItemHandler = function (item, prevAmount) {
        dispatchCartStateAction({ type: "ADD", item: item, prevAmount: prevAmount })
    }
    const removeItemHandler = function (id) {
        dispatchCartStateAction({ type: "REMOVE", id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;