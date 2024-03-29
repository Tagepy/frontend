import { useContext } from "react";
import CartProductCard from "./CartProductCard";
import MainContext from "../Context/MainContext";

const Cart = () => {
  const { getCart } = useContext(MainContext);

  function total() {
    let counter = 0;
    getCart.map((x) => (counter += x.price * x.quantity));
    return counter;
  }

  return (
    <div>
      <h2>Total price: {total()} €</h2>
      {getCart.map((x, i) => (
        <CartProductCard key={i} item={x} />
      ))}
    </div>
  );
};

export default Cart;
