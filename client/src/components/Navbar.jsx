
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useContext, useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className='flex justify-between items-center py-4 md:py-5 relative'>
            <Link to='/'>
                <img src={assets.logo} className='w-24 sm:w-28 md:w-32 lg:w-40' alt="" />
            </Link>
            <div className='hidden md:flex'>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3 '>
                        <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-all duration-400 '>
                            <img src={assets.credit_star} className='w-5 sm:w-5' alt="" />
                            <p className='text-sm sm:text-sm font-medium text-gray-600'>Credit:{credit}</p>
                        </button>
                        <p className='text-gray-600 pl-4 hidden lg:block text-base'>Hi, {user.name}</p>
                        <div className='relative' ref={dropdownRef}>
                            <img onClick={() => setIsDropdownOpen(!isDropdownOpen)} src={assets.profile_icon} className='w-9 sm:w-11 drop-shadow cursor-pointer' alt="" />
                            <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} top-0 right-0 z-10 text-black rounded pt-14`}>
                                <ul className='list-none m-0 p-2 bg-gray-400 rounded-md text-base font-medium'>
                                    <li onClick={() => { logout(); setIsDropdownOpen(false); }} className='py-2 px-3 cursor-pointer pr-12 hover:bg-gray-500 rounded'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-3 sm:gap-4'>
                        <p onClick={() => setShowLogin(true)} className='cursor-pointer hover:text-blue-600 transition-all duration-300 text-base sm:text-base'>Login</p>
                        <button onClick={() => setShowLogin(true)} className='px-5 sm:px-8 py-2 sm:py-2.5 bg-zinc-900 text-white rounded-full hover:scale-105 transition-all duration-300 text-base sm:text-base font-medium'>Sign up</button>
                    </div>
                }
            </div>
            <div className='md:hidden flex items-center gap-2'>
                {user && (
                    <button onClick={() => navigate('/buy')} className='flex items-center gap-1 bg-blue-100 px-3 py-2 rounded-full hover:scale-105 transition-all'>
                        <img src={assets.credit_star} className='w-5' alt="" />
                        <p className='text-sm font-medium text-gray-600'>{credit}</p>
                    </button>
                )}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='p-2 text-2xl font-bold'>
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className='absolute top-16 right-0 w-full bg-white shadow-lg md:hidden z-20'>
                    {user ? (
                        <div className='flex flex-col p-5 gap-4'>
                            <p className='text-gray-600 font-semibold text-lg'>Hi, {user.name}</p>
                            <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className='bg-red-500 text-white px-4 py-3 rounded-full hover:bg-red-600 transition-all font-medium text-base'>Logout</button>
                        </div>
                    ) : (
                        <div className='flex flex-col p-5 gap-4'>
                            <p onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false); }} className='cursor-pointer hover:text-blue-600 py-3 font-medium text-base'>Login</p>
                            <button onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false); }} className='px-4 py-3 bg-zinc-900 text-white rounded-full hover:scale-105 transition-all font-medium text-base'>Sign up</button>
                        </div>
                    )}
                </div>
            )}
        </div >
    )
}

export default Navbar
