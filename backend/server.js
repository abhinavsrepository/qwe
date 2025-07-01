const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {console.log('Connected to MongoDB', { useNewUrlParser: true, useUnifiedTopology: true })})
    .catch(err => {console.error('MongoDB connection error:', err)})

const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
  