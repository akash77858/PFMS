// routes/goalRoutes.js

const express = require('express');
const router = express.Router();

// Example route to get all goals
router.get('/', (req, res) => {
    // Handle fetching all goals
    res.send('List of goals');
});

// Example route to create a new goal
router.post('/', (req, res) => {
    // Handle creating a new goal
    res.send('Goal created');
});

// Example route to update a goal
router.put('/:id', (req, res) => {
    // Handle updating a specific goal
    res.send(`Goal with ID ${req.params.id} updated`);
});

// Example route to delete a goal
router.delete('/:id', (req, res) => {
    // Handle deleting a specific goal
    res.send(`Goal with ID ${req.params.id} deleted`);
});

module.exports = router;
