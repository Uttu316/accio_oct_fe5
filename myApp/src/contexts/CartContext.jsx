import { createContext, useCallback, useState } from "react";

//step 1.

export const CartContext = createContext();

//Step 2
const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(
    (item) => {
      setCart((currCart) => [...currCart, item]);
    },
    [cart]
  );
  const removeFromCart = useCallback(
    (id) => {
      let remainingCart = cart.filter((i) => i.id !== id);
      setCart(remainingCart);
    },
    [cart]
  );

  const isInCart = useCallback(
    (id) => {
      return cart.find((i) => i.id === id);
    },
    [cart]
  );

  const cartSize = cart.length;
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        isInCart,
        cartSize,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
