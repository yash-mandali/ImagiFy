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
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-4 font-semibold text-neutral-800 py-4 sm:py-6 md:py-16'>See the magic. Try now</h1>
      <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-5 sm:px-8 lg:px-12 py-2 sm:py-3 rounded-full bg-black text-white text-sm sm:text-base hover:scale-105 transition-all duration-500 cursor-pointer'>
        Generate Images
        <img src={assets.star_group} alt="" className='h-4 sm:h-6' />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
