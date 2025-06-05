import phonerepairimg from '../assets/phonerepair.jpg';
import repair from '../assets/repair.jpg';
import parts from '../assets/parts.jpg';
import { Link } from 'react-router';

const Home: React.FC = () => {
    return (
        <div className="container-fluid p-0">
            <HeroCarousel />
            <div className="container text-center p-4 rounded">
                <h1 className='border-primary border-bottom border-3 mx-3 fw-bold display-4'>Rideau Repairs Phones & Electronics</h1>
                <p className="lead">123 Rideau Street, Ottawa Ontario</p>
                <p className=' fw-light fs-5'>We provide quick, professional repair services for phones, tablets, and other electronic devices. Our highly experienced technicians are ready to fix cracked screens, battery issues, software glitches, and more — all with top-quality parts and service you can count on. For your convenience, we also offer home technician appointments, so you can get expert help without leaving your home. Fast. Friendly. Hassle-free.</p>
                <div className="row m-4 p-4 align-items-center">
                    <div className='col-6'>
                        <div className="card border-0 bg-secondary text-light">
                            <div className="card-body py-4 text-start">
                                <h4 className="card-title fw-bold">iPhone and Android Phone Repairs</h4>
                                <p className=" card-subtitle my-4">Our main expertise is phone repairs. We offer competitive and fair pricing. *Pricing includes service fee and spare parts. Book a repair appointment or contact us now for exact quotes!</p>
                                <h5>Average Cost for iPhone/Android Phone Repairs: <span className='text-primary'>$65</span></h5>

                                <Link to="/services" className="btn btn-primary shadow-lg mt-2">View All of our Repair Services</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="card border-0 bg-secondary text-light ">
                            <div className="card-body py-4 text-start">
                                <h4 className="card-title fw-bold">PC & iMac Repairs</h4>
                                <h5>Average Cost for PC/iMac Repairs: <span className='text-primary'>$100 base + Spare Parts</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className="card border-0 bg-secondary text-light">
                            <div className="card-body py-4 text-start">
                                <h4 className="card-title fw-bold">Other Electronics</h4>
                                <h5>Average Cost for Other Electronics Repairs: <span className='text-primary'>Varies on device, Contact Us!</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const HeroCarousel: React.FC = () => {
    return (
        <div id="heroCarousel" className="carousel slide carousel mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={phonerepairimg} className="d-block caro-img opacity-50" alt="Phone Repair" />
                    <div className="carousel-caption d-none d-md-block ">
                        <h3 className='fw-bold'>Over a decade of providing repair services to locals. Highly trained and experienced experts. Thousands of happy customers.</h3>
                        <Link to="/book" className="btn btn-primary mx-2 shadow-lg">Book an Appointment</Link>
                    </div>
                </div>

                <div className="carousel-item ">
                    <img src={parts} className="d-block w-100 caro-img opacity-50 " alt="Parts" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className='fw-bold'>Looking for spare electronic parts? View our parts catalogue, we offer competitive and market pricing! </h3>
                        <Link to="/catalogue" className="btn btn-primary mx-2 shadow-lg">View Catalogue</Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={repair} className="d-block w-100 caro-img opacity-50" alt="Repair" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className='fw-bold'>Looking for DIY Repair guides? We believe in the right to repair! View our free repair guides for various devices</h3>
                        <Link to="/guides" className="btn btn-primary mx-2 shadow-lg">View Guides</Link>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

        </div>
    );
}

export default Home;