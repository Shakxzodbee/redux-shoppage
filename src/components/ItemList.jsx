import React from 'react'
import Item from './item'
import { data } from '../Data'

const ItemList = () => {
  return (
    <>
    {data.map((item) => (
        <Item key={item.id} item={item} />

    ))}
    </>
  )
}

export default ItemList