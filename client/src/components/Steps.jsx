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
      <h1 className='text-3xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center'>How It Works</h1>
      <p className='text-lg sm:text-lg text-gray-600 mb-8 sm:mb-8 text-center'>Transform Words Into Stunning Images</p>
      <div className='space-y-4 sm:space-y-4 w-full max-w-2xl md:max-w-3xl text-base sm:text-base'>
        {stepsData.map((item, index) => (
          <div key={index} className='flex items-start sm:items-start gap-4 sm:gap-4 p-5 sm:p-6 sm:px-8 bg-white/20 shadow-md rounded-lg cursor-pointer hover:scale-[1.02] transition-all duration-300'>
            <img src={item.icon} className='w-10 sm:w-10 flex-shrink-0' alt="" />
            <div>
              <h2 className='text-lg sm:text-xl font-semibold'>{item.title}</h2>
              <p className='text-gray-600 text-base sm:text-base mt-1'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
