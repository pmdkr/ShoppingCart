import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {


  const cartItmes = useSelector(state => state.cart);

  return (
    <div>
      {JSON.stringify(cartItmes)}
    </div>
  )
}

export default Cart