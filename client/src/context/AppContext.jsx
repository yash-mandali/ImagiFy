import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();


const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(0)

    
    const navigate = useNavigate()

    const loadCreditData = async () => {
        try {
            console.log('Loading credit data with token:', token);
            const { data } = await axios.get('https://imagi-fy-eta.vercel.app//api/user/credits', { headers: { token } })
            console.log('Credit data response:', data);

            if (data.success == false) {
                toast.error("login creditdata are not success")
            }
            if (data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log('Error loading credits:', error);
            toast.error(error.message)
        }
    }

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post('https://imagi-fy-eta.vercel.app//api/image/generate-image', { userId: user?._id, prompt }, { headers: { token } })
            if (data.success) {
                loadCreditData()
                return data.image
            } else {
                toast.error(data.message)
                loadCreditData()
                if (data.creditBalance === 0) {
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        navigate('/')
    }

    useEffect(() => {

        if (token) {
            loadCreditData();
        }
    }, [token])

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditData,
        logout,
        generateImage,
      
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export { AppContext };
export default AppContextProvider;