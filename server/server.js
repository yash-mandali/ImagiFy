const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./Routes/userRoute');
const imageRouter = require("./Routes/imageRoutes");

app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URI}/imagify`)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send('Api is running...'))

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(` server running on http://localhost:${PORT}`)
})

