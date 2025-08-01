import React from 'react';
import Header from './components/header';
import IntakeForm from './components/IntakeForm';
import IntakeLogs from './components/IntakeLog';

function App() {
  return (
    <div className="App">
      <Header />
      <IntakeForm />
      <IntakeLogs />
    </div>
  );
}

export default App;
