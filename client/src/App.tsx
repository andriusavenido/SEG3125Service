import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Catalogue from './pages/Catalogue';
import Cart from './pages/Cart';
import Booking from './pages/Booking';
import Services from './pages/Services';
import Guides from './pages/Guides';
import About from './pages/About';

function App() {
  return (<>
  
    <div
      className="offcanvas offcanvas-bottom "
      tabIndex={-1}
      id="contactOffcanvas"
      aria-labelledby="contactOffcanvasLabel"
      style={{ height: '15vh' }}
    >
      <div className="offcanvas-header nav-color">
        <h3 className="offcanvas-title nav-color text-light fw-bold" id="contactOffcanvasLabel ">Contact Us</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body nav-color text-white">
        <h4>Phone: <span className='text-primary'>+1 (123) 456-7890</span></h4>
        <h4>Email: <span className='text-primary'>rideaurepairs@gmail.com</span></h4>
      </div>
    </div>
    
    <BrowserRouter>
    <Navbar />
    <div className="pages mt-5 bg-dark p-4 min-vh-100 text-light">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/information" element={<About/>} />
      <Route path="/services" element={<Services></Services>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/catalogue" element={<Catalogue/>} />
      <Route path="/guides" element={<Guides/>} />
      <Route path="/book" element={<Booking/>} />
      <Route path="*" element={<div className='container-fluid mt-5 fw-bold fs-3'>404 Not Found. Reload Page.</div>} />
    </Routes>
    <footer className='mx-auto text-center my-5'> Rideau Repairs Phone & Electronics. Site created by Andrius Avenido. </footer>
    </div>
    </BrowserRouter></>
  )
}

export default App
