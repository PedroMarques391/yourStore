import {
  useState, useEffect, createContext,
} from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const totalPrice = cart.reduce((
      accumulator,
      currentItem,
    ) => accumulator + (currentItem.price * 4) * currentItem.amount, 0);
    setTotalPrice(totalPrice.toFixed(2));
  });

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decrementAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }
        return item;
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      incrementAmount,
      decrementAmount,
      itemAmount,
      totalPrice,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
