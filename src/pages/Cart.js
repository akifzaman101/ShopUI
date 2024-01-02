import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = ({data, handleDelete}) => {
  //const products = [
    //{"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
   // {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}
  //]

  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {data.length}</h1>
        {data.map((product, index) => (
          <CartCard key={product.id} data={product} index={index} handleDelete={handleDelete}/>
        ))}
      </section>
    </main>
  )
}
