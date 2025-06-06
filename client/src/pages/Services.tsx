import { Link } from 'react-router';
import iphoneimg from '../assets/iphone.png';
import laptopimg from '../assets/laptoprepair.png';
import macimg from '../assets/imac.png';
import switchimg from '../assets/switch.png';

const Services: React.FC = () => {

    return (
        <div className="container mt-5">
            <h1 className='border-primary border-bottom border-3 fw-bold display-4 my-3'>Our Repair Services</h1>
            <p className='fw-light fs-5'> Fixed pricing isn't final! Based on your repair needs, the cost for repairment may be be reduced or increased. <a className="Links" data-bs-toggle="offcanvas"
                data-bs-target="#contactOffcanvas">Contact us for an exact quote!</a></p>

            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4 bg-secondary text-light card-hover">
                        <img src={iphoneimg} className="card-img-top" style={{ maxHeight: '30vh' }} alt="Phone Repair" />
                        <div className="card-body ">
                            <h3 className="card-title fw-bold">Phone and Mobile Repairs</h3>
                            <p className="card-text">We offer comprehensive phone repair services including screen replacements, battery replacements, and more.</p>

                            <h5>Pricing Chart</h5>
                            <ul>
                                <li>iPhone: <span className="text-primary">$25 base + spare parts</span></li>
                                <li>Android Repair: <span className="text-primary">$20 base + spare parts</span></li>
                                <li>Screen Replacement: <span className="text-primary">Starting at $40</span></li>
                                <li>Battery Replacement: <span className="text-primary">Starting at $30</span></li>
                                <li>Water Damage Repair: <span className="text-primary">From $50</span></li>
                                <li>Charging Port Fix: <span className="text-primary">Starting at $35</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 bg-info text-black card-hover">
                        <img src={laptopimg} className="card-img-top" alt="Laptop Repair" />
                        <div className="card-body ">
                            <h3 className="card-title fw-bold">Laptop Repairs</h3>
                            <p className="card-text">
                                From hardware issues to software troubleshooting, we can fix your laptop efficiently. Our technicians handle all major brands with fast turnaround times.
                            </p>

                            <h5 className="mt-3">Pricing Chart</h5>
                            <ul>
                                <li>Diagnostic Fee: <span className="text-white">$30 (waived with repair)</span></li>
                                <li>Screen Replacement: <span className="text-white">Starting at $90</span></li>
                                <li>Battery Replacement: <span className="text-white">Starting at $70</span></li>
                                <li>Keyboard Repair/Replacement: <span className="text-white">From $60</span></li>
                                <li>SSD/HDD Upgrade: <span className="text-white">Starting at $80 (plus parts)</span></li>
                                <li>Software Troubleshooting: <span className="text-white">From $40</span></li>
                            </ul>
                            <p className="fw-light"><small>*Prices may vary based on model and issue complexity.</small></p>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 bg-info text-black card-hover">
                        <img src={switchimg} className="card-img-top" alt="Game Console Repair" />
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Game Console Repairs</h3>
                            <p className="card-text">
                                We service all major consoles including PlayStation, Xbox, and Nintendo Switch. From overheating to disk read errors, we've got it covered.
                            </p>
                            <h6 className="mt-3">Pricing Chart</h6>
                            <ul>
                                <li>Diagnostic Fee: <span className="text-primary">$25 (waived with repair)</span></li>
                                <li>HDMI Port Replacement: <span className="text-primary">From $60</span></li>
                                <li>Overheating / Cleaning Service: <span className="text-primary">$40</span></li>
                                <li>Drive Replacement or Repair: <span className="text-primary">Starting at $70</span></li>
                                <li>Software Reinstallation: <span className="text-primary">From $35</span></li>
                            </ul>
                            <p className="text-muted"><small>*Prices vary by console model and issue severity.</small></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card mb-4 bg-secondary text-white card-hover">
                        <img src={macimg} className="card-img-top" alt="Desktop Repair (iMac and PCs)" style={{ maxHeight: '25vh', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Desktop Repair (iMac and PCs)</h3>
                            <p className="card-text">
                                Our desktop repair services include power issues, upgrades, virus removal, and custom builds. Fast, reliable service for home or office PCs.
                            </p>
                            <h6 className="mt-3">Pricing Chart</h6>
                            <ul>
                                <li>Diagnostic Fee: <span className="text-primary">$30 (waived with repair)</span></li>
                                <li>Power Supply Replacement: <span className="text-primary">From $60 + parts</span></li>
                                <li>System Tune-Up / Virus Removal: <span className="text-primary">$45 flat</span></li>
                                <li>RAM/SSD Upgrade: <span className="text-primary">Starting at $40 + parts</span></li>
                                <li>Custom Build Assembly: <span className="text-primary">From $100</span></li>
                            </ul>
                            <p className="text-light"><small>*Final price depends on components and labor time.</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='nav-color text-light p-3 rounded-2 card-hover'>
                <h3 className='fw-bold'>Additional Services that we provide (Miscellenous Electronics)</h3>
                <ul>
                    <li>Select Electronic Repair (Radios, TVs, Cable Box). Contact us for inquiries!</li>
                    <li>Data Recovery</li>
                    <li>Software Installation</li>
                    <li>Hardware Upgrades</li>
                    <li>Custom Builds</li>
                </ul>

                <p>If you have any questions or need a specific service not listed here, please contact us!</p>
            </div>

        </div>
    );
}

export default Services;