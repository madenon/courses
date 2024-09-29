import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency,getCartAmount, delivery_fee} = useContext(ShopContext)

  return (
   <div className='w-full'>
     <div className='text-2xl'>
        <Title text1={'Total'} text2={"panier"} />
    </div>
    <div className='flex flex-col gap-2 mt-2 text-sm'>
 <div className='flex justify-between'>
<p className=''>Sous Total</p>
<p>{getCartAmount()}.00 {currency}</p>
 </div>
 <hr />
 <div className='flex justify-between'>
 <p>Frais de livraison</p>
 <p>{delivery_fee}.00 {currency} </p>
 </div>
 <hr />

 <div className='flex justify-between'>
  <b>Total</b>
  <b>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00 {currency}</b>
 </div>
    </div>
   </div>
  )
}

export default CartTotal