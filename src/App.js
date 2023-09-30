import { useState } from 'react';
import './App.css';

function App() {
  const [ color, setColor ] =  useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';
  const [ enabled, setEnabled ] = useState(false);
  const [ isChecked, setIsChecked ] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
    setEnabled(!isChecked);
  };
  console.log(isChecked);
  return (
    <div className="App">
      <button style={{backgroundColor: color}} onClick={() => setColor(newColor)} disabled={enabled}>Change to {color}</button>
      <input id='disable-button-checkbox' type="checkbox" checked={isChecked} onChange={handleChange}/>
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
