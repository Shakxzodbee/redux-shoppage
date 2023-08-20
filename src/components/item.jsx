import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../Reduxtoolkit/ItemSlice'

const Item = ({item}) => {
  const dispatch = useDispatch()
  const hanldeAdd = (item) => {
    dispatch(addCart(item))
  }
  return (
    <div className='item-card'>
        <div className="item-card-top">
            <h5>{item.name}</h5>
            <div className="item-price">
                ${item.price}.00
            </div>
        </div>
        <div className="item-desc">{item.desc}</div>
        <div onClick ={()=> hanldeAdd(item)} className="btn-add-tocard">Add to Cart</div>
    </div>
  )
}

export default Item