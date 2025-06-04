import catalogueItems from '../assets/parts.json'
import { useState } from 'react';

const Catalogue: React.FC = () => {

    //pagination states
    const [activePage, setActivePage] = useState(1);
    const maxItems = 5;

    const totalPages = Math.ceil(catalogueItems.length / maxItems);

    const startIndex = (activePage - 1) * maxItems;
    const currentItems = catalogueItems.slice(startIndex, startIndex + maxItems);

    return (  
        <div className="container-fluid mt-5">
            <div className="d-flex flex-row align-items-center bg-primary mx-5 p-3 rounded-2 text-dark">
                <h4 className='mx-2 mb-0'>Parts Catalogue</h4>
                <label htmlFor="" className="mx-2"><i className="bi bi-search"></i> Search</label>
                <input type="text" className="mx-2" />
            </div>

            <div className="row mx-5 mt-4 align-items-center justify-content-center">
                {currentItems.map((item, index) => (
                    <CatalogueItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        img={item.img}
                    />
                ))}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-primary mx-1"
                    disabled={activePage === 1}
                    onClick={() => setActivePage(prev => prev - 1)}
                >
                    Prev
                </button>
                <span className="mx-2 align-self-center">Page {activePage} of {totalPages}</span>
                <button
                    className="btn btn-primary mx-1"
                    disabled={activePage === totalPages}
                    onClick={() => setActivePage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

interface CatalogueItemProps {
    title: string;
    description: string;
    price: number;
    img: string;
}

const CatalogueItem: React.FC<CatalogueItemProps> = ({title,description,price,img}) => {
    return (
        <div className="card m-2 p-2 w-75 bg-secondary text-light">
            <div className="card-body d-flex align-items-center">
                <img 
                    src={img} 
                    alt={title} 
                    className="me-3" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div className='flex-grow-1'>
                    <h4 className="card-title mb-1 fw-bold">{title}</h4>
                    <p className="card-text mb-2 fs-5 fw-light">Price: <span className='text-primary fw-bold'>${price.toFixed(2)}</span></p>
                </div>
                <div className="flex-grow-1 mx-5">
                    <p className="card-text mb-1 text-end mr-5 fw-light">{description}</p>
                </div>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}
 
export default Catalogue;