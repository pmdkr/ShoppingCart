import React from 'react'

const ProductCard = ({ data }) => {
    const { title, image, price } = data;
    return (
        <div>
            <div className="product-cart">
                <ul>
                    <img src={image} alt="" style={{ width: '80px', height: '120px' }} />
                    <li>{title}</li>
                    
                    <li>Rs. {price}</li>
                </ul>

            </div>
            <button className='btn'>Add To Cart</button>

        </div>




    )
}

export default ProductCard
