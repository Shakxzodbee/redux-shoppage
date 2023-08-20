import React from 'react'
import Cartitem from './Cartitem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const newData = useSelector((state) => state.add.newData)
  console.log(newData)
  return (
    <div className='cart'>
        <p className='cart-title'>Your shopping cart</p>
        {newData.map((item) => (
          <Cartitem key={item.id} cartdata = {item}/>
          

        ))}
    </div>
  )
}

export default Cart