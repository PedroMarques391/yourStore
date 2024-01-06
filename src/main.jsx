import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ProductProvider from './contexts/ProductContext';
import SideBarProvider from './contexts/SideBarContext';
import CartProvider from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>,
);
