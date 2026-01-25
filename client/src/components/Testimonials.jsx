import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-16 sm:my-20 md:my-24 py-8 md:py-12 px-4'>
            <h1 className='text-3xl sm:text-3xl md:text-4xl font-semibold mb-3 text-center'>Customer testimonials</h1>
            <p className='text-gray-600 mb-10 sm:mb-12 text-center text-lg sm:text-lg'>What our customers say about us</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 w-full'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='bg-white/20 p-8 sm:p-8 md:p-10 rounded-lg shadow-lg cursor-pointer hover:scale-[1.02] transition-all'>
                        <div>
                            <img src={testimonial.image} alt="" className='rounded-full w-14 sm:w-16 md:w-16' />
                            <h2 className='text-lg sm:text-xl font-semibold mt-4'>{testimonial.name}</h2>
                            <p className='text-gray-600 mb-4 text-base sm:text-base font-medium'>{testimonial.role}</p>
                            <div className='flex mb-4 gap-1'>
                                {Array(testimonial.stars).fill().map((item, index) => (
                                    <img src={assets.rating_star} key={index} className='w-5 sm:w-5' alt="" />
                                ))}
                            </div>
                            <p className='text-center text-base sm:text-base text-gray-700 leading-relaxed'>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
