const Goal = require('../models/Goal');

exports.setGoal = async (req, res) => {
    const { goal, amount, date } = req.body;

    try {
        const newGoal = new Goal({
            user: req.user.id,
            goal,
            amount,
            date,
        });

        const goalObj = await newGoal.save();

        res.json(goalObj);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user.id });

        res.json(goals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
