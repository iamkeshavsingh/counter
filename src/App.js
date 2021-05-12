import React, { useState } from 'react'
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';


function App() {
  var [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <React.Fragment>
      <Counter counter={counter} />
      <Button increment={handleCounter} decrement={handleDecrement} />
    </React.Fragment>
  );
}

export default App;
