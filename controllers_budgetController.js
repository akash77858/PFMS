const Budget = require('../models/Budget');

exports.setBudget = async (req, res) => {
    const { month, amount } = req.body;

    try {
        const newBudget = new Budget({
            user: req.user.id,
            month,
            amount,
        });

        const budget = await newBudget.save();

        res.json(budget);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getBudget = async (req, res) => {
    try {
        const budget = await Budget.findOne({ user: req.user.id });

        res.json(budget);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
