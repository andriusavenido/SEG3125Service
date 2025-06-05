import bookphoto from '../assets/consult.png';
import { useState } from 'react';

const Booking: React.FC = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container mt-5 h-100">
            <div className="row">
                <img src={bookphoto} alt="booking photo" className="img-fluid col-3 " />

                <div className="col-9 bg-secondary text-light p-4 rounded-start-2">
                    {!submitted && (<>
                        <h1 className="fw-bold"><i className="bi bi-book-half"></i> Book a Repair Appointment</h1>
                        <p className="fw-light fs-6">To book a repair appointment, please fill out and submit this form. You can also contact us directly at our Phone: <span className='text-primary'>+1 (123) 456-7890</span></p>
                        <p className="fw-light fs-6">Make sure to also view our repair service list!</p>
                        <form onSubmit={handleSubmit}>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <label className='fs-5'>What is your name? *</label><br />
                                    <input
                                        type="text"
                                        className="w-50 text-light bg-dark rounded-2 border-0 p-2"
                                        placeholder='Enter your full name...'
                                        required
                                    />
                                </li>

                                <li className="mb-3">
                                    <label className='fs-5'>What is your Email Address? *</label><br />
                                    <input
                                        type="email"
                                        className="w-50 text-light bg-dark rounded-2 border-0 p-2"
                                        placeholder='Enter your email...'
                                        required
                                    />
                                </li>

                                <li className="mb-3">
                                    <label className='fs-5'>Select the preferred date of your appointment. *</label><br />
                                    <input
                                        type="date"
                                        className="w-50 text-light bg-dark rounded-2 border-0 p-2"
                                        required
                                    />
                                </li>

                                <li className="mb-3">
                                    <label className='fs-5'>Provide a description and details of your issue for repair: *</label><br />
                                    <textarea
                                        className="w-75 text-light bg-dark rounded-2 border-0 p-2"
                                        rows={4}
                                        placeholder='Describe the issue...'
                                        required
                                    ></textarea>
                                </li>

                                <li>
                                    <button type="submit" className="btn btn-primary fw-bold">
                                        Submit Appointment Request
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </>)
                    }

                    {submitted && (
                        <>
                            <h4 className="fw-bold fs-3">Appointment Request Submitted!</h4>
                            <p>Thank you for booking an appointment with us. We will review your request and get back to your email within 1-3 days to confirm the exact time and date of your appointment. </p>
                            <hr />
                            <p className="mb-0">If you have any questions, feel free to contact us at <span className='text-primary'>+1 (123) 456-7890</span> or <span className='text-primary'>rideaurepairs@gmail.com</span></p>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Booking;