import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event)=>{
        event.preventDefault()
    }
  return (
    <div className='text-center shadow-md text-gray-500'>
        <p className='text-xl  font-medium rounded-full' >Abonez-vous dès maintenat et obtenez jusqu'a 20% de réduction</p>
        <p className='text-gray-400 text-xl  mt-3 '>Aboonez-vous à notre  mise d'actualité pour ne rien raté</p>
        <form onSubmit={onSubmitHandler} className=" w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border rounded-full shadow-lg">
            <input className='w-full sm:flex-1 rounded-full require outline-none ml-3'   type='email' placeholder='Entrez votre email' required />
            <button type='submit' className='bg-black text-white rounded-full  text-xs px-10 py-4 mb-0'>S'ABONNER</button>
        </form>
    </div>
  )
} 

export default NewsletterBox


