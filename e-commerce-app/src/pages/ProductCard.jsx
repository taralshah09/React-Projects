import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({title,description,img,price,rating_rate,rating_count}) => {
    const {id} = useParams()
  return (
    <div className='product-card'>
        <div className="img-box">
            <img src={img} alt="" />
        </div>
        <div className="overlay">
            <p>{title}</p>
        </div>
    </div>
    
  )
}

export default ProductCard
