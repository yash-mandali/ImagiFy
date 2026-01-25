import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-16 md:my-24 p-4 md:px-20 lg:px-28'>
      <h1 className='text-3xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center'>Create AI Images</h1>
      <p className='text-gray-600 mb-8 sm:mb-8 text-center text-lg sm:text-lg'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-6 md:gap-10 lg:gap-14 md:flex-row items-center w-full'>
        <img src={assets.sample_img_1} alt="" className='w-full sm:w-72 md:w-80 lg:w-80 xl:w-96 rounded-lg object-cover' />
        <div className='flex-1'>
          <h2 className='text-2xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-4 text-center md:text-left'>
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className='text-gray-700 mb-4 md:mb-4 text-base sm:text-base text-center md:text-left leading-relaxed'>
            Easily bring your ideas to life with our free AI image generator. Whether you need stuning visuals or unique imagery, our tool transform your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
          </p>
          <p className='text-gray-700 text-base sm:text-base text-center md:text-left leading-relaxed'>
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character design and portraits, even concepts that don't yet exists can be visualized effortlessly. Powered by advanced AI technology, the creative possibillities are limitless!
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
