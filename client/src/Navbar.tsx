import { Link } from "react-router";
import { useState, useEffect, useContext } from 'react';
import { CartContext } from './context/CartContext';

const Navbar: React.FC= () => {

    const { cartItems } = useContext(CartContext);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Update cart count whenever cartItems changes
        setCartCount(cartItems.length);
    }, [cartItems]);

    return ( 
    <div className="navbar text-light m-0 p-0 fixed-top">
        <div className="container-fluid p-3 nav-color ">
            <div className="border-bottom border-primary border-3">
                <h2 className="fw-bold">Rideau Repairs Phone & Electronics</h2>
            </div>
            <div>
                <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-light fs-6 fs-md-5 fs-lg-4 mx-3">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link text-light fs-6 fs-md-5 fs-lg-4 mx-3">Repair Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/catalogue" className="nav-link text-light fs-6 fs-md-5 fs-lg-4 mx-3">Parts Catalogue</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/guides" className="nav-link text-light fs-6 fs-md-5 fs-lg-4 mx-3">Repair Guides</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/information" className="nav-link text-light fs-6 fs-md-5 fs-lg-4 mx-3">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
         <div className="container-fluid justify-content-end bg-transparent">
            <div className="d-flex flex-row">
                <Link to="/book" className="btn btn-primary mx-2 no-top-radius shadow-lg"><i className="bi bi-book-half"></i> Book Appointment</Link>
                <Link to="/contact" className="btn btn-primary mx-2 no-top-radius shadow-lg"><i className="bi bi-telephone-fill"></i> Contact Us</Link>              
                <Link to="/cart" className="btn btn-primary mx-2 no-top-radius shadow-lg"><i className="bi bi-cart-fill"></i>View Cart<span className="fw-bold">{cartCount> 0 ? ', '+cartCount + ' item(s)':''}</span></Link>
            </div>
        </div>
    </div> 
    );
}
 
export default Navbar;