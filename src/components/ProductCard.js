import "./ProductCard.css";

export const ProductCard = ({product, handleAdd}) => {
    const{name,price,image} = product;
    
  return (
    <div className="productCard">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            <button onClick={()=>handleAdd(product)}>Add To Cart</button>

        </div>
    </div>
  )
}
