import { useEffect, useState } from "react";
import {useCart} from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const { addToCart,removeFromCart, cartlist } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const{id,name,price,image} = product;

  useEffect(() => {
    const productIsInCart = cartlist.find(cartItems => cartItems.id === id);
    if(productIsInCart){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
  }, [cartlist, id])

  return (
    <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            {isInCart ? (<button className="remove" onClick={() => removeFromCart(product)}>remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>)}
            
        </div>
    </div>
  )
}
