import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [ color, setColor ] =  useState('red');
  const [ isEnabled, setIsEnabled ] = useState(false);
  const [ isChecked, setIsChecked ] = useState(false);
  const newColor = color === 'red' ? 'blue' : 'red';

  const handleChange = () => {
    setIsChecked(!isChecked);
    setIsEnabled(!isChecked);
  };

  return (
    <div className="App">
      <button style={{backgroundColor: isEnabled ? 'gray' : color}} onClick={() => setColor(newColor)} disabled={isEnabled}>Change to {color}</button>
      <input id='disable-button-checkbox' type="checkbox" checked={isChecked} onChange={handleChange}/>
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
