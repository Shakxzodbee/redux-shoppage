import React from 'react'
import {useDispatch} from 'react-redux'
import {removeItem, addCart} from '../Reduxtoolkit/ItemSlice'



const Cartitem = ({cartdata}) => {
    const dispatch = useDispatch()

    const handleDelete = (cartdata) => {
        dispatch(removeItem(cartdata))
    }
    const handleAdd = (id, name, price) => {
        dispatch(addCart({
            id, name, price
        }))
    }

  return (
    <div className="body">
            <div className="top">
                <h5 className="product-name">{cartdata.name}</h5>
                <div className="price">${cartdata.totalPrice}.00  <span className="single-price">${cartdata.price}.00/item</span></div>
            </div>
            <div className="bottom">
                <h5 className="product-quantity">x{cartdata.quantity}</h5>
                <div className="btn-wrap">
                    <div onClick={()=> handleDelete(cartdata)} className="btn-minus-plus">-</div>
                    <div onClick={() => handleAdd(cartdata.id, cartdata.name, cartdata.price)} className="btn-minus-plus">+</div>
                </div>
            </div>
        </div>
  )
}

export default Cartitem