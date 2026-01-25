import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
      <div className='flex items-center justify-between gap-4 py-3 mt-20 border-t border-gray-400'>
          <img src={assets.logo} width={150} alt="" className='cursor-pointer' />
          <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max:sm-hidden'>Copyright @ | All right reserved.</p>
          <div className='flex gap-2.5'>
              <img src={assets.facebook_icon} width={35} alt="" className='hover:bg-blue-600 rounded-full transition-all doration-400 hover:scale-115 cursor-pointer'/>
              <img src={assets.twitter_icon} width={35} alt="" className='hover:bg-blue-600 rounded-full transition-all doration-400 hover:scale-115 cursor-pointer' />
              <img src={assets.instagram_icon} width={35} alt="" className='hover:bg-blue-600 rounded-full transition-all doration-400 hover:scale-115 cursor-pointer' />
          </div>
          
    
    </div>
  )
}

export default Footer
