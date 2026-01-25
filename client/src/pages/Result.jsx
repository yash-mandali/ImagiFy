import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }


  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler} className='flex flex-col min-h-[80vh] md:min-h-[90vh] justify-center items-center px-4'>
      <div className='w-full flex justify-center'>
        <div className='relative'>
          <img src={image} alt="" className='w-full max-w-xs sm:max-w-sm md:max-w-md rounded mt-6 sm:mt-10' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
      </div>
      <p className={`text-base sm:text-lg mt-3 ${!loading ? 'hidden' : ''}`}>Loading...</p>

      {!isImageLoaded &&
        <div className='flex flex-col sm:flex-row w-full max-w-xs sm:max-w-xl bg-neutral-500 rounded-full text-white text-sm sm:text-base p-1 mt-8 sm:mt-10 gap-1 sm:gap-0'>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none px-4 sm:px-8 py-3 sm:py-3 placeholder-color text-sm sm:text-base' />
          <button
            className='bg-zinc-900 px-6 sm:px-12 md:px-16 py-3 sm:py-3 rounded-full text-white text-sm sm:text-base font-medium hover:bg-zinc-800 transition-all whitespace-nowrap'
            type="submit">Generate</button>
        </div>
      }
      {isImageLoaded &&
        <div className='flex gap-2 sm:gap-4 flex-wrap justify-center text-white text-sm sm:text-base p-2 mt-8 sm:mt-10 w-full max-w-md sm:max-w-lg'>
          <button onClick={() => { setIsImageLoaded(false) }} className='flex-1 min-w-32 sm:flex-none bg-transparent border border-zinc-900 text-black px-4 sm:px-8 py-2.5 sm:py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-all font-medium text-xs sm:text-base whitespace-nowrap'>Generate Another</button>
          <a href={image} download className='flex-1 min-w-24 sm:flex-none bg-zinc-900 px-4 sm:px-10 py-2.5 sm:py-3 rounded-full cursor-pointer hover:bg-zinc-800 transition-all font-medium text-xs sm:text-base text-center whitespace-nowrap'>Download</a>
        </div>
      }
    </motion.form>
  )
}

export default Result
