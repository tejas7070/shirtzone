import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => setCart(prev => [...prev, product],
    alert("Product added to Cart successfully!")
    
  );
 
  const removeFromCart = (id) => {
    const txt = window.confirm("The item will be removed, are you sure??");
    if(txt){
     setCart(prev => prev.filter(p => p.id !== id));
    }
    
  }
    
 const clearCart = () => setCart([]);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
