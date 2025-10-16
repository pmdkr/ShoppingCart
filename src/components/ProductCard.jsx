import React from 'react'

const ProductCard = ({ data }) => {
    const { title, image, id, price } = data;
    return (
        <div>
            <div className="productCard">
                <ul>
                    <li>{title}</li>
                    <li>{price}</li>
                </ul>
            </div>

        </div>
    )
}

export default ProductCard
