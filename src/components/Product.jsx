import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then((result) => {
                setProducts(result);
                console.log(result);
            }
            )

    }, [])
    return (
        <div>
            <h1>Products</h1>
            {products.map((item) => (
                <ProductCard data={item} />
            ))}
            {/* {JSON.stringify(products)} */}

        </div>
    )
}

export default Product
