import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './custom.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {CartProvider} from './context/CartContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
