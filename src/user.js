const express = require('express');
const router = express.Router();

// Mock database
let users = [];

// Create User
router.post('/users', (req, res) => {
    const {name, email } = req.body;
    const user = { id: user.length + 1, name, email };
    user.push(user);
    res.status(201).json(user);
});

//Get All Users
router.get('/users', (req, res) => {
    res.json(users);
});

module.exports = router;