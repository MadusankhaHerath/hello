import logo from './logo.svg';
import './App.css';
import Button from './component/button';
import { useState } from 'react';

function App() {
  const [val ,setVal] = useState(100)

  const addValue = () =>{
    let val2 = val+100;
setVal(val2)
  }
  return (
    <div className="App">
      <div>
        <p>{val}</p>
        <h1>Dilshan</h1>
        <Button  click ={addValue}/>
      </div>
    </div>
  );
}

export default App;
