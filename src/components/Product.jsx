import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';


const Product = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addItem(product));
        // console.log(product);


    }

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
        <div className='container'>
            <h1>Product Dashboard</h1>
            <div className='products'>
                {products.map((item) => (
                    <ProductCard key={item.id} data={item} addToCart={addToCart} />
                ))}


            </div>



        </div>
    )
}

export default Product;
