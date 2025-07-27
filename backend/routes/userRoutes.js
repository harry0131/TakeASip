const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /user – Create new user
router.post('/', async (req, res) => {
  try {
    const { name, waterTarget } = req.body;
    const newUser = new User({ name, waterTarget });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /user/:id – Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
