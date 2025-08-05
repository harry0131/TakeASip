const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Defining DB schema
const intakeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Defineing DB model
const Intake = mongoose.model('Intake', intakeSchema);

// POST /intake - log water intake
router.post('/', async (req, res) => {
  try {
    const { userId = 'guest', amount } = req.body;

    const newIntake = new Intake({ userId, amount });
    await newIntake.save();

    res.status(201).json({ message: 'Intake logged', intake: newIntake });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET /intake/:userId - fetch intake logs for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const logs = await Intake.find({ userId }).sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
