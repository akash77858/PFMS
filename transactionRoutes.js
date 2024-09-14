// routes/transactionRoutes.js

const express = require('express');
const router = express.Router();

// Example route to get all transactions
router.get('/', (req, res) => {
    // Handle fetching all transactions
    res.send('List of transactions');
});

// Example route to create a new transaction
router.post('/', (req, res) => {
    // Handle creating a new transaction
    res.send('Transaction created');
});

// Example route to update a transaction
router.put('/:id', (req, res) => {
    // Handle updating a specific transaction
    res.send(`Transaction with ID ${req.params.id} updated`);
});

// Example route to delete a transaction
router.delete('/:id', (req, res) => {
    // Handle deleting a specific transaction
    res.send(`Transaction with ID ${req.params.id} deleted`);
});

module.exports = router;
