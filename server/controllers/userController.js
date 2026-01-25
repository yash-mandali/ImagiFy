const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const razorpay = require("razorpay")
const jwt = require('jsonwebtoken');
const transactionModel = require('../models/transactionModel');

require('dotenv').config()

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = {
            name,
            email,
            password: hashedPassword
        }
        const newUser = new userModel(userData)
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret")
        res.json({ success: true, token, user: { name: user.name } })
    }
    catch (error) {
        // console.log("Error in Register User:", error);
        res.json({ success: false, message: "registerUser error ::" + error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret")
            res.json({ success: true, token, user: { name: user.name } })

        } else {
            return res.json({ success: false, message: "Invalid credentials" })

        }
    } catch {
        // console.log("Error in Login User:", error);
        res.json({ success: false, message: "loginUser error ::" + error.message })
    }
}

const userCredits = async (req, res) => {
    try {
        const userId = req.user?.userId;
        // console.log("Getting credits for userId:", userId);
        if (!userId) {
            return res.json({ success: false, message: "User ID not found in token" })
        }
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }
        res.json({ success: true, credits: user.creditBalance, user: { name: user.name } })

    } catch (error) {
        // console.log("Error in credits:", error);
        res.json({ success: false, message: "userCredits error ::" + error.message })
    }
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_S5pzQXIgN2Rnwc",
    key_secret: process.env.RAZORPAY_KEY_SECRET || "hwmV0zvdDf6Vyc9noybgWB4S",
});

const paymentRazorpay = async (req, res) => {
    try {
        const userId = req.user?.userId;
        const { planId } = req.body;
        
        // console.log(userData)

        if (!userId || !planId) {
            return res.json({ success: false, message: 'Missing UserId or PlanId' })
        }
  
        let credits, plan, amount, date;
        switch (planId) {
            case 'Basic':
                plan = 'Basic'
                credits = 100
                amount = 199
                break;
            case 'Advanced':
                plan = 'Advanced'
                credits = 250
                amount = 499
                break;
            case 'Business':
                plan = 'Business'
                credits = 500
                amount = 799
                break;

            default:
                return res.json({ success: false, message: 'Plan not found' })
        }
        date = Date.now();

        const transactionsData = { userId, plan, amount, credits, date }

        const newTransaction = await transactionModel.create(transactionsData)

        const options = {
            amount: amount * 100,
            currency: process.env.CURRENCY || "INR",
            receipt: newTransaction._id
        }

         await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                res.json({ success: false, message: error.message })
            }
            res.json({ success: true, order })
        })

    } catch (error) {
        // console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body;
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if (orderInfo.status === 'paid') {
            const transactionsData = await transactionModel.findById(orderInfo.receipt)
            if (transactionsData.payment) {
                return res.json({ success: false, message: 'payment failed' })
            }
            const userData = await userModel.findById(transactionsData.userId)
            const creditBalance = userData.creditBalance + transactionsData.credits
            await userModel.findByIdAndUpdate(userData._id, { creditBalance })
            await transactionModel.findByIdAndUpdate(transactionsData._id, { payment: true })
            res.json({ success: true, message: "credits Added" })
        } else {
            res.json({ success: false, message: "Payment Failed" })
        }

    } catch (error) {
        // console.log(error);
        res.json({ success: false, message: error.message })
    }
}

module.exports = { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay }