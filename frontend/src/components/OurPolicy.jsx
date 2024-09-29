import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row   shadow-md bg-black/25
    justify-around gap-12 sm:gao-2 text-center
     py-20 text-xs sm:text-sm  md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 mx-auto mb-5' alt="" />
             <p className='font-semibold'>Notre politique d'échange</p>
             <p className='text-gray-400'>Nous offrons une politique d'échange  apdatée à tout le monde</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 mx-auto mb-5' alt="" />
             <p className='font-semibold'>Politique de retour de Une semaine</p>
             <p className='text-gray-400'>Nous  acceptons un  retour de colis sur 7 jous après livraison de produit</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 mx-auto mb-5' alt="" />
             <p className='font-semibold'>Un meilleur  service client</p>
             <p className='text-gray-400'>Un meilleur service client à votre disposition 7/7 jours</p>
        </div>
     </div>
  )
}

export default OurPolicy