const formData = require('form-data');
const axios = require("axios")
const userModel = require('../models/userModel.js');

const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const userId = req.user.userId;
        // Image generation logic here
        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            return res.json({
                success: false,
                message: "missing  id or prompt"
            })
        }

        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.json({
                success: false,
                message: "No credits left",
                creditBalance: user.creditBalance
            });
        }
        const formdata = new formData()
        formdata.append("prompt", prompt);

        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formdata, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API || "9088d07b030265c66e20216f2a1b5015801daa16d41dbfbe93a255f3784bd865e5f21eb43038fd3d6d9c1405e94a7f55",
            },
            responseType: 'arraybuffer'
        })
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });
        res.json({
            success: true,
            image: resultImage,
            message: "Image Generated",
            creditBalance: user.creditBalance - 1
        })

    } catch (error) {
        // console.log("Error in GenerateImage:", error);
        res.json({ success: false, message: "generateImage error ::" + error.message })
    }
}

module.exports = { generateImage };



