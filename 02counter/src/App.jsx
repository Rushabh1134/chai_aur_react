import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  const increaseValue = () => {
    if (counter == 20) {
      setCounter(counter);
    } else {
      setCounter(counter++);
    }
  };
  const decreaseValue = () => {
    if (counter == 0) {
      setCounter(counter);
    } else {
      setCounter(counter--);
    }
  };
  return (
    <>
      <h1>Chai aur Resct</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
