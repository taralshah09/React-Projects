import React from 'react'
import { actions } from '../App'

const CartItem = ({id,img,title,quantity,price,dispatch}) => {
  return (
    <div className='cart-item'>
      <img src={img} alt="" />
      <p>{title}</p>
      <span>{quantity}</span>
      <p>{price}</p>
      <i className="fa-solid fa-trash" style={{color:"red"}} onClick={()=>dispatch({type:actions.delete_item,payload:{id:id}})}></i>
    </div>
  )
}

export default CartItem
