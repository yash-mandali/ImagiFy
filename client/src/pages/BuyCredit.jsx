import { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCredit = () => {

  const { user, token, loadCreditData, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_S5pzQXIgN2Rnwc",
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        try {
          const { data } = await axios.post('https://imagi-fy-eta.vercel.app/api/user/verify-razor', response, { headers: { token } })
          if (data.success) {
            loadCreditData();
            navigate('/')
            toast.success('Credits Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    };
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    console.log("Plan id in paymentrazor: " + planId);

    try {
      if (!user) {
        setShowLogin(true)
        return
      }
      const { data } = await axios.post('https://imagi-fy-eta.vercel.app/api/user/pay-razor', { planId }, { headers: { token } });
      if (data.success) {
        initPay(data.order)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-8 md:pt-14 mb-10 px-4'>
      <button className='border border-gray-400 px-6 sm:px-10 py-1.5 sm:py-2 rounded-full mb-4 text-xs sm:text-sm'>Our Plans</button>
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-medium mb-6 md:mb-10'>Choose the plan</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center'>
        {plans.map((item, index) => (

          <div key={index} className='bg-white drop-shadow-md rounded-lg py-8 sm:py-12 px-6 sm:px-8 text-gray-600 hover:scale-105 transition-all duration-500 w-full max-w-sm'>
            <img src={assets.logo_icon} className='w-8 sm:w-10' alt="lock_icon" />
            <p className='mt-3 mb-1 font-semibold text-sm sm:text-base'>{item.id}</p>
            <p className='text-xs sm:text-sm'>{item.desc}</p>
            <p className='mt-4 sm:mt-6'>
              <span className='text-2xl sm:text-3xl font-semibold'>
                ₹{item.price}
              </span>
              <span className='text-xs sm:text-sm'>/{item.credits} credits</span>
            </p>
            <button onClick={() => paymentRazorpay(item.id)} className='w-full mt-6 sm:mt-8 bg-gray-800 text-xs sm:text-sm text-white rounded-md cursor-pointer py-2 sm:py-2.5 hover:bg-gray-900 transition-all'>
              {user ? 'purchase' : 'Get Started'}
            </button>
          </div>

        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
