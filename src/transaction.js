const express = require('express');
const router = express.Router();

//Mock database
let transaction = [];

// Process Transaction
router.post('/transaction',(req, res) => {
    const { userId, amount } = req.body;
    const transaction = { id: transactions.length + 1, userId, amount, date: new Date() };
    transactions.push(transaction);
    res.status(201).json(transaction);
});

// Get All Transactions
router.get('/transactions', (req, res) => {
    res.json(transactions);
});

module.exports = router;