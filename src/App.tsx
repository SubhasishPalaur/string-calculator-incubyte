import React, { useState } from 'react';
import { add } from './Utils/StringCalculator';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = () => {
    try {
      const output = add(input);
      setResult(output);
    } catch (error) {
      setResult((error as Error).message);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default App;
