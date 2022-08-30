import React from "react"
const ContextData = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})
export default ContextData;
