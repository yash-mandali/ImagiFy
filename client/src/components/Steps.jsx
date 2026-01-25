import React from 'react'
import { assets, stepsData } from '../assets/assets'
import { motion } from 'framer-motion';
const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-16 sm:my-24 md:my-32 px-4'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center'>How It Works</h1>
      <p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center'>Transform Words Into Stunning Images</p>
      <div className='space-y-3 sm:space-y-4 w-full max-w-2xl md:max-w-3xl text-xs sm:text-sm'>
        {stepsData.map((item, index) => (
          <div key={index} className='flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 sm:px-8 bg-white/20 shadow-md rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300'>
            <img src={item.icon} className='w-8 sm:w-10' alt="" />
            <div>
              <h2 className='text-base sm:text-xl font-medium'>{item.title}</h2>
              <p className='text-gray-500 text-xs sm:text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
