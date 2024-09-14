// routes/budgetRoutes.js

const express = require('express');
const router = express.Router();

// Example route to get all budgets
router.get('/', (req, res) => {
    // Handle fetching all budgets
    res.send('List of budgets');
});

// Example route to create a new budget
router.post('/', (req, res) => {
    // Handle creating a new budget
    res.send('Budget created');
});

// Example route to update a budget
router.put('/:id', (req, res) => {
    // Handle updating a specific budget
    res.send(`Budget with ID ${req.params.id} updated`);
});

// Example route to delete a budget
router.delete('/:id', (req, res) => {
    // Handle deleting a specific budget
    res.send(`Budget with ID ${req.params.id} deleted`);
});

module.exports = router;
