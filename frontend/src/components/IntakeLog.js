
import React, { useEffect, useState } from 'react';
import './IntakeLog.css';

function IntakeLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Replace 'guest' with actual userId if you have authentication
    fetch('http://localhost:5000/intake/guest')
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.error("Error fetching intake logs:", err));
  }, []);

  return (
    <div>
      <h2>Water Intake Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log._id}>
            {new Date(log.timestamp).toLocaleString()}: {log.amount} ml
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IntakeLog;
