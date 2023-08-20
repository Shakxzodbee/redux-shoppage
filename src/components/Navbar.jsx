import React from 'react'
import './general.css'
import { useDispatch,useSelector } from 'react-redux'
import { showCart } from '../Reduxtoolkit/CartSplice'

const Navbar = () => {
  const dispatch = useDispatch()
  const productQuantitty = useSelector((state)=> state.add.newData.length)

  const hanldeClick = () => {
    dispatch(showCart())
  }
  return (
    <div className = "navbar bg-dark text-light">
        <div className="container wrapper">
            <h4 className="logo">Redux App</h4>
            <div onClick={hanldeClick} className="show-card-btn">
                <span className='btn-title'>Shop</span>
                <div className="quantity-indicator">{productQuantitty}</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar