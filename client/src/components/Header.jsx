
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

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
            className='flex flex-col justify-center items-center text-center my-10 sm:my-20 px-4'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                className='text-stone-500 inline-flex text-center gap-2 bg-white px-5 sm:px-6 py-2 rounded-full border border-neutral-500 text-sm sm:text-sm'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
            >
                <p className='font-medium'>
                    Best Text to Image AI Generator
                </p>
                <img src={assets.star_icon} className='w-5' alt="" />
            </motion.div>
            <motion.h1
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[95%] sm:max-w-[400px] md:max-w-[600px] mx-auto mt-8 sm:mt-10 text-center font-bold leading-tight'>Turn text to <span className='text-blue-600'>image</span>, in seconds.</motion.h1>
            <motion.p
                className='text-center max-w-sm sm:max-w-md md:max-w-lg mx-auto mt-5 sm:mt-5 text-base sm:text-lg leading-relaxed text-gray-700'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >Create stunning images from text descriptions using our advanced AI technology. Just type, and watch magic happen.</motion.p>

            <motion.button
                onClick={onClickHandler}
                className='text-sm sm:text-base md:text-base lg:text-lg text-white bg-black w-auto mt-8 sm:mt-8 px-8 sm:px-10 md:px-12 py-3 sm:py-3 md:py-3 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 transition-all font-medium'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8 }, duration: 1 }}
            >Generate Images
                <img src={assets.star_group} className='h-5 sm:h-5 md:h-6' alt="" />
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='flex flex-wrap justify-center mt-10 sm:mt-16 gap-2 sm:gap-3'>
                {Array(6).fill('').map((item, index) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 1 }}
                        key={index}
                        src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}
                        className='rounded hover:scale-105 transition-all duration-300 cursor-pointer w-8 sm:w-10 md:w-12 lg:w-16'
                        alt=""
                    />
                ))}
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className='mt-2 text-neutral-600 text-xs sm:text-sm'>Generated images from Imagify</motion.p>

        </motion.div>
    )
}

export default Header
