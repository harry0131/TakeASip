import React, { useState } from 'react';

function IntakeForm() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount) })
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('✅ Intake logged!');
        setAmount('');
      } else {
        setMessage('❌ Error: ' + data.message);
      }
    } catch (err) {
      setMessage('❌ Server error');
    }
  };

  return (
    <div>
      <h2>Log Your Water Intake</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount in ml"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default IntakeForm;
