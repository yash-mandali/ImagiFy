
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useContext, useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        <div className='flex justify-between items-center py-4'>
            <Link to='/'>
                <img src={assets.logo} className='w-28 sm:w-32 lg:w-40' alt="" />
            </Link>
            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3 '>
                        <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-400 '>
                            <img src={assets.credit_star} className='w-5' alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit left:{credit} </p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                        <div className='relative' ref={dropdownRef}>
                            <img onClick={() => setIsDropdownOpen(!isDropdownOpen)} src={assets.profile_icon} className='w-10 drop-shadow cursor-pointer' alt="" />
                            <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} top-0 right-0 z-10 text-black rounded pt-12`}>
                                <ul className='list-none m-0 p-2 bg-gray-400 rounded-md  text-sm'>
                                    <li onClick={() => { logout(); setIsDropdownOpen(false); }} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                    :
                    <div className='flex gap-2 items-center sm:gap-5'>
                        <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                        <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</button>
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar
