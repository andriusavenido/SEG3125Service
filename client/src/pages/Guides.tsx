import repairman from '../assets/repairman.png';

const Guides: React.FC = () => {
    return (
        <div className="container mt-5" >
            <img src={repairman} alt="" className='w-100' style={{ maxHeight: '40vh'}}/>
            <h1 className='border-primary border-bottom border-3 fw-bold display-4 my-3'>Our Repair Services</h1>
            <p className='fw-light fs-5'> We believe in the consumer right to repair. We have compiled some community guide links for our customer base to view and learn from.
                <a className="Links" data-bs-toggle="offcanvas"
                    data-bs-target="#contactOffcanvas"> Feel free to contact us if there are anything specific you are interested in for repair guide!</a>
            </p>

            <div className="row">
                <div className="col bg-secondary text-light p-4 m-2 rounded-3">
                    <h4>Phone Repair Guide</h4>
                    <a href="https://www.ifixit.com/Device/Phone">View Guide</a>
                </div>
                <div className="col bg-info text-light p-4 m-2 rounded-3">
                    <h4>PC Repair Guide</h4>
                    <a href="https://www.youtube.com/watch?v=s1fxZ-VWs2U" >View Guide</a>
                </div>
             
            </div>
            <div className="row">
                   <div className="col bg-info text-light p-4 m-2 rounded-3">
                    <h4>Console Repair Guide</h4>
                    <a href="https://www.ifixit.com/Device/Game_Console" >View Guide</a>
                </div>
                <div className="col bg-secondary text-light p-4 m-2 rounded-3">
                    <h4>TV Repair Guide</h4>
                    <a href="https://www.ifixit.com/Device/Television" >View Guide</a>
                </div>
            </div>
        </div>
    );
}

export default Guides;