import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from "../store/cartSlice.js";


const Cart = () => {


  const cartItmes = useSelector(state => state.cart);
  // console.log(cartItmes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id))
  }


  if (cartItmes.length === 0) return <h1>Cart is empty</h1>;

  return (
    <div>
      {cartItmes.map((item) => (
        <div key={item.id} className="cart-items">
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button className='delete-btn' onClick={() => handleDelete(item.id)}>❎</button>
        </div>

      ))}
    </div>
  )
}

export default Cart