// This code defines the routes for a CRUD application using Express.js and Mongoose.
const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Create a new user
router.post('/', async (req, res) => {
    // const { name, email } = req.body
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

//Read all users 
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users) 
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// Update a user
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ message: 'User deleted successfully' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router
