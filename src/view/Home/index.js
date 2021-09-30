import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [catalog, setCatalog] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=> {
        axios("https://613cea45270b96001798b2e8.mockapi.io/api/catalog")
            .then(({data}) => setCatalog(data))
    }, [])
    return (
        <div>
            <div className="row">
                {
                    catalog.map(product =>
                        <div className="col-md-3 mb-4" key={product.id}>
                            <img src={product.images} alt="" className="w-100"/>
                            <h4>{product.title}</h4>
                            <p>{product.price}$</p>
                            <button>add to cart</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;