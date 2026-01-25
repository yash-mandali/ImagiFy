import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='text-center pb-12 md:pb-16 px-4'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4 sm:mt-4 font-semibold text-neutral-800 py-6 sm:py-8 md:py-16'>See the magic. Try now</h1>
      <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-8 sm:px-10 lg:px-12 py-3 sm:py-3 rounded-full bg-black text-white text-base sm:text-base font-medium hover:scale-105 transition-all duration-500 cursor-pointer'>
        Generate Images
        <img src={assets.star_group} alt="" className='h-4 sm:h-6' />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
