import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="pages bg-dark p-4 min-vh-100 text-light">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/information" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="/cart" element={<div>cart Page</div>} />
      <Route path="/catalogue" element={<div>catalogue Page</div>} />
      <Route path="/guides" element={<div> guides</div>} />
      <Route path="/appointment" element={<div> guides</div>} />
      <Route path="*" element={<div>404 Not Found. Reload Page.</div>} />
    </Routes>
    <footer className='mx-auto text-center'> Rideau Repairs Phone & Electronics. Site created by Andrius Avenido. </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
