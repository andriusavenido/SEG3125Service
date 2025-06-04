import catalogueItems from '../assets/parts.json'
import type { CatalogueItemProps } from '../context/CartContext';
import { CartContext } from '../context/CartContext';1
import { useState, useEffect, useContext } from 'react';

const Catalogue: React.FC = () => {

    //search state
    const [searchTerm, setSearchTerm] = useState('');

    //filter states
    const [sortAlpha, setSortAlpha] = useState<'az' | 'za' | ''>('');
    const [sortPrice, setSortPrice] = useState<'asc' | 'desc' | ''>('');
 
    //reset page on search change
    useEffect(() => {
        setActivePage(1);
    }, [searchTerm]);

    //pagination states
    const [activePage, setActivePage] = useState(1);
    const maxItems = 5;

    //filter catalogue items based on search term
    let filteredItems = catalogueItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()));

    // alphabetical sort
    if (sortAlpha === 'az') {
        filteredItems = [...filteredItems].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortAlpha === 'za') {
        filteredItems = [...filteredItems].sort((a, b) => b.title.localeCompare(a.title));
    }

    // price sort
    if (sortPrice === 'asc') {
        filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
    } else if (sortPrice === 'desc') {
        filteredItems = [...filteredItems].sort((a, b) => b.price - a.price);
    }

    const totalPages = Math.ceil(filteredItems.length / maxItems);
    const startIndex = (activePage - 1) * maxItems;
    const currentItems = filteredItems.slice(startIndex, startIndex + maxItems);

    return (
        <div className="container-fluid mt-5">
            <div className="d-flex flex-row align-items-center bg-primary mx-5 p-3 rounded-2 text-dark">
                <h4 className='mx-2 mb-0'>Parts Catalogue</h4>
                <label htmlFor="" className="mx-2"><i className="bi bi-search"></i> Search</label>
                <input type="text" className="mx-2 w-25 bg-secondary text-light rounded-2" placeholder='Search by name...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <select
                    className="form-select mx-2 w-auto bg-secondary text-light"
                    value={sortAlpha}
                    onChange={(e) => setSortAlpha(e.target.value as 'az' | 'za' | '')}
                >
                    <option value="">Sort Alphabetically</option>
                    <option value="az">A - Z</option>
                    <option value="za">Z - A</option>
                </select>

                <select
                    className="form-select mx-2 w-auto bg-secondary text-light"
                    value={sortPrice}
                    onChange={(e) => setSortPrice(e.target.value as 'asc' | 'desc' | '')}
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Low - High</option>
                    <option value="desc">High - Low</option>
                </select>
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

const CatalogueItem: React.FC<CatalogueItemProps> = ({ title, description, price, img }) => {
     //grab cart functions from context
    const {addToCart} = useContext(CartContext);

    return (
        <div className="card m-2 p-2 w-75 bg-secondary text-light">
            <div className="card-body d-flex align-items-center">
                <img
                    src={img}
                    alt={title}
                    className="me-3 border-info"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div className='flex-grow-1'>
                    <h4 className="card-title mb-1 fw-bold">{title}</h4>
                    <p className="card-text mb-2 fs-5 fw-light">Price: <span className='text-primary fw-bold'>${price.toFixed(2)}</span></p>
                </div>
                <div className="flex-grow-1 mx-5">
                    <p className="card-text mb-1 text-end mr-5 fw-light">{description}</p>
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({title, description, price, img})}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Catalogue;