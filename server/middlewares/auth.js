const jwt = require('jsonwebtoken')
require('dotenv').config()

const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    console.log("Auth middleware - token received:", token ? "yes" : "no");
    if (!token) {
        return res.json({
            success: false,
            message: 'token unavailable, login again'
        })
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET || "secret");
        console.log("Auth middleware - decoded token:", tokenDecode);
        if (tokenDecode.id) {
            req.user = { userId: tokenDecode.id };
            console.log(req.user);

        } else {
            return res.json({
                success: false,
                message: "not authorized, login again"
            })
        }
        next();
    } catch (error) {
        console.log("Auth middleware error:", error);
        res.json({
            success: false,
            message: "userAuth error ::" + error.message
        })

    }

}
module.exports = userAuth;
