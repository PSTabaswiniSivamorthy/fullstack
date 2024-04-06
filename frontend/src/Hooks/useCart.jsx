import React, {
  createContext,
  useState,
  useEffect,
  useContext,
 
} from "react";

const CartContext = createContext(null);
const CART_KEY = "cart";
const EMPTY_CART = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export default function CartProvider({ children }) {
  const initCart = getCartFromLocalStorage();
  const [cartItems, setCartItems] = useState(initCart.items);
  const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
  const [totalCount, setTotalCount] = useState(initCart.totalCount);

  useEffect(() => {
    const totalPrice = sum(cartItems.map((item) => item.price));
    const totalCount = sum(cartItems.map((item) => item.quantity));
    setTotalCount(totalCount);
    setTotalPrice(totalPrice);
    localStorage.setItem(
      CART_KEY,
      JSON.stringify({
        items: cartItems,
        totalCount,
        totalPrice,
      })
    );
  },[cartItems]);
  function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
  }

  const sum = (items) => {
    return items.reduce((prev, cur) => prev + cur, 0);
  };
  const removeFromCart = (cakeId) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.cake.id !== cakeId
    );
    setCartItems(filteredCartItems);
  };
  const changeQuantity = (cartItem, newQauntity) => {
    const { cake } = cartItem;

    const changedCartItem = {
      ...cartItem,
      quantity: newQauntity,
      price: cake.price * newQauntity,
    };

    setCartItems(
      cartItems.map((item) =>
        item.cake.id === cake.id ? changedCartItem : item
      )
    );
  };
  const addToCart = cake => {
    const cartItem = cartItems.find(item => item.cake.id === cake.id);
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { cake, quantity: 1, price: cake.price }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalCount, totalPrice },
        removeFromCart,
        changeQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
