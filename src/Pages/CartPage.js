import React, { useEffect } from "react";
import Cart from "../Components/Cart";

const CartPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("/cart");
  }, []);

  return (
    <div>
      <Cart />
    </div>
  );
};

export default CartPage;
