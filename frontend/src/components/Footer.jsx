import React from 'react'
import { assets } from '../assets/assets'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <div className=' shadow-md border-b-2 border-gray-300 mt-10'>
 <FooterTop />
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]
      gap-14 my-10 mt-40 text-sm'>
  <div>
    <img src={assets.logo_n}   className='mb-5 w-10' alt="" />
  <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque sit eaque ducimus rerum minima ad, suscipit labore a possimus eos, voluptatem, expedita dolores incidunt ratione esse quod blanditiis cumque?</p>
  </div>
  <div >
 <p className='text-xl font-medium mb-5'>Entreprise</p>
 <ul className='flex flex-col gap-1 text-gray-600'>
 <li>ACCUEIL</li>
 <li>A PROPOS DE NOUS</li>
 <li>LIVRAISON</li>
 <li>POLITIQUE DE CONFIDENTIALITÉ</li>
 </ul>
  </div>

  <div>
    <p className='text-xl font-medium mb-5'>Nous contacter</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
    <li>+212691942109</li>
    <li>Email: na-contact@gmail.ci</li>
  </ul>
  </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright  &copy; 2024 nabini.ci - Tout droit réservé</p>
      </div>
    </div>
  )
}

export default Footer