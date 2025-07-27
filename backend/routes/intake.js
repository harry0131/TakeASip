const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// Define schema
const intakeSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Optional: hardcode or skip for now
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Define model
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

module.exports = router;
