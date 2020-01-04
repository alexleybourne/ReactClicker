const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/user')

dotenv.config()

// Connect to Database
mongoose.connect(
process.env.DB_CONNECT, 
{ useNewUrlParser: true },
() => console.log('Connected to DB') 
)


// Middleware
app.use(express.json())

// Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/user', userRoute)

app.listen(3000, () => console.log('Server is up and Running!'))

