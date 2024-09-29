import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
    const{currency}  =  useContext(ShopContext)

  return (
    <>
    <Link className='text-gray-700 bg-slate-200 cursor-pointer shadow-sm' to={`/product/${id}`}>
    <div className='overflow-hidden w-full '>
 <img  className='hover:scale-110 transition  ease-out w-full border border-r-2 border-slate-300  shadow-lg br-radis  bg-slate-700  gap-5  max-h-48' src={image[0]} alt="" />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium'>{price} {currency}</p>
    </Link>
    
    </>
  )
}

export default ProductItem