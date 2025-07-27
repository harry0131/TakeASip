const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  waterTarget: {
    type: Number, // in ml
    default: 2000
  },
  intakeLogs: [
    {
      date: { type: Date, default: Date.now },
      amount: Number // in ml
    }
  ]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
