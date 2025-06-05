import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Cart: React.FC = () => {

    const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);



    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className="col-12 col-md-8 bg-secondary text-light p-3 mb-3 mb-md-0 p-3 rounded-start-2">
                    <div style={{ maxHeight: '800px', overflowY: 'auto' }}>
                        <ul className="list-group">
                            {cartItems.length === 0 ? (
                                <li className="list-group-item bg-secondary text-light border-0 my-3">
                                    Your cart is currently empty.
                                </li>
                            ) : (
                                cartItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="d-flex justify-content-between align-items-center bg-secondary text-light border-start border-primary border-4 my-2"
                                    >
                                        <div className="mx-3">
                                            <h5 className="mb-1">{item.title}</h5>
                                            <p className="mb-1 text-primary">${item.price.toFixed(2)}</p>
                                        </div>  
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            Remove Item
                                        </button>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
                <div className='col-4 bg-info text-light py-5 px-4 d-flex flex-column justify-content-between rounded-end-2'>
                    <h3 className='fw-bold fs-1'><i className="bi bi-cart-fill" /> Cart</h3>
                    <div>
                        <h5 className='mt-3'>Items in Cart: {cartItems.length}</h5>
                        <h5 className='mt-3'>Sales Tax (HST): ${(totalPrice * 0.13).toFixed(2)}</h5>
                        <h5 className='mt-3'>Processing Fee: ${(totalPrice * 0.01).toFixed(2)}</h5>
                        <hr />
                        <h3>Total Cost (with tax): ${totalPrice.toFixed(2)}</h3>

                        <button className='btn btn-secondary mx-2 fw-light'>Order for delivery</button>
                        <button className='btn btn-secondary mx-2 fw-light'>Order for Pickup</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;