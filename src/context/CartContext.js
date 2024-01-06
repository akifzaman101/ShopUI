import { createContext, useContext, useReducer} from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartlist: [],
    total: 0
}

const CartContext = createContext(initialState);
const add = "ADD_TO_CART";

export const CartProvider = ({children}) => {
 
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        const updatedCartList = state.cartlist.concat(product); 
        console.log(updatedCartList);

        updatetotal(updatedCartList)
        dispatch({
            type: add,
            payload: {
                products: updatedCartList
            }
        })

    }
    const removeFromCart = (product) => {
        const updatedCartList = state.cartlist.filter(current => current.id !== product.id);
        updatetotal(updatedCartList)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                products: updatedCartList
            }
        })
    }
    const updatetotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price);
        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }

    const value = {
        total: state.total,
        cartlist: state.cartlist,
        addToCart,
        removeFromCart

    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}