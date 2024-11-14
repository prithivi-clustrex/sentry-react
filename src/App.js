import React from 'react';
import './App.css';
function App() {
  const handleClick = () => {
    const undefinedValue = undefined;
    undefinedValue.someMethod(); 
  };
  return (
    <div className="App">
      <h1>Click the Button to Trigger TypeError</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;