import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="pages bg-dark p-4 min-vh-100">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="/services" element={<div>Services Page</div>} />
      <Route path="*" element={<div>404 Not Found. Reload Page.</div>} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
