import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-6 py-6 md:py-8 mt-16 md:mt-20 border-t border-gray-400 px-4'>
      <img src={assets.logo} className='w-28 sm:w-36 md:w-40 cursor-pointer' alt="" />
      <p className='hidden md:flex flex-1 border-l border-gray-400 pl-4 text-sm md:text-sm text-gray-600 font-medium'>Copyright @ImagiFy | All right reserved.</p>
      <p className='md:hidden text-sm text-gray-600 text-center font-medium'>Copyright @ImagiFy | All right reserved.</p>
      <div className='flex gap-3 sm:gap-4'>
        <img src={assets.facebook_icon} className='w-8 sm:w-9 md:w-10 hover:bg-blue-600 rounded-full transition-all duration-400 hover:scale-110 cursor-pointer' alt="#" />
        <img src={assets.twitter_icon} className='w-8 sm:w-9 md:w-10 hover:bg-blue-600 rounded-full transition-all duration-400 hover:scale-110 cursor-pointer' alt="#" />
        <img src={assets.instagram_icon} className='w-8 sm:w-9 md:w-10 hover:bg-blue-600 rounded-full transition-all duration-400 hover:scale-110 cursor-pointer' alt="#" />
      </div>
    </div>
  )
}

export default Footer
