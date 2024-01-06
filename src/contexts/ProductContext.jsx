import { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
