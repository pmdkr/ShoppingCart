import React from 'react'

const ProductCard = ({ data, addToCart }) => {
    const { title, image, price } = data;
    const addItemToCart = () => {
        addToCart(data);
    }


    // const addItemToCart = () => {
    //     props.addToCart(props)

    // }




    return (
        <div>
            <div className="product-cart">
                <ul>
                    <img src={image} alt="" style={{ width: '80px', height: '120px' }} />
                    <li>{title}</li>

                    <li>Rs. {price}</li>
                </ul>

            </div>
            <button className='btn' onClick={() => addItemToCart(data)}>Add To Cart</button>

        </div>




    )
}

export default ProductCard
