import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-4 md:py-6 mt-16 md:mt-20 border-t border-gray-400 px-4'>
      <img src={assets.logo} className='w-24 sm:w-32 md:w-40 cursor-pointer' alt="" />
      <p className='hidden md:flex flex-1 border-l border-gray-400 pl-4 text-xs sm:text-sm text-gray-500'>Copyright @ImagiFy | All right reserved.</p>
      <p className='md:hidden text-xs text-gray-500 text-center'>Copyright @ImagiFy | All right reserved.</p>
      <div className='flex gap-2 sm:gap-2.5'>
        <img src={assets.facebook_icon} className='w-7 sm:w-8 md:w-9 hover:bg-blue-600 rounded-full transition-all duration-400 hover:scale-110 cursor-pointer' alt="" />
        <img src={assets.twitter_icon} className='w-7 sm:w-8 md:w-9 hover:bg-blue-600 rounded-full transition-all duration-400 hover:scale-110 cursor-pointer' alt="" />
        <img src={assets.instagram_icon} className='w-7 sm:w-8 md:w-9 hover:bg-blue-600 rounded-full transition-all duration-400 hover:scale-110 cursor-pointer' alt="" />
      </div>
    </div>
  )
}

export default Footer
