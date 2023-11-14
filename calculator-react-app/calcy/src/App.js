
import './App.css';
import Keypad from './components/keypad';
import Display from './components/display';
import { useState } from 'react';

function App() {
  const [exp, setExp] = useState("");

  return (
    <div className="App">
      <Display exp={exp} />
      <Keypad exp={exp} setExp={setExp}/>
    </div>
  );
}

export default App;
