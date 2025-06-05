import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Catalogue from './pages/Catalogue';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="pages mt-5 bg-dark p-4 min-vh-100 text-light">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/information" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/catalogue" element={<Catalogue/>} />
      <Route path="/guides" element={<div> guides</div>} />
      <Route path="/appointment" element={<div> guides</div>} />
      <Route path="*" element={<div>404 Not Found. Reload Page.</div>} />
    </Routes>
    <footer className='mx-auto text-center my-5'> Rideau Repairs Phone & Electronics. Site created by Andrius Avenido. </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
