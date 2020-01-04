const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/user')
const indexRoute = require('./routes/index')

// render documents with ejs
app.set('view engine', 'ejs');

dotenv.config()

// Connect to Database
mongoose.connect(
process.env.DB_CONNECT, 
{ useNewUrlParser: true },
() => console.log('Connected to DB') 
)

// Middleware
app.use(express.json())

// Images
app.use(express.static('public'))

// Route Middlewares
app.use('/', indexRoute)
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/user', userRoute)

app.listen(3000, () => console.log('Server is up and Running!'))

