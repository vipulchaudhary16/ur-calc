const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const PORT = 8080

dotenv.config()
app.use(express.json())
//for CORS requests
app.use(cors())

//database connection
const URL = process.env.MONGODB_URL
mongoose.connect(URL).then(() => {
    console.log("DB Connected")
}).catch((error) => {
    console.log(`DB Connection failed, ${error}`)
})

//listening server
app.listen(PORT , () => {
    console.log(`Server running on ${PORT}`)
})