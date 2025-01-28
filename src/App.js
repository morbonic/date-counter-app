import { useState } from "react";

function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const currentDate = new Date();
  const days = steps * count;

  return (
    <div className="text-center">
      <h1>Exercise 1</h1>
      <Steps steps={steps} setSteps={setSteps} />
      <Counter count={count} setCount={setCount} />
      <br />
      <div>
        {count < 0 && Math.abs(days) + " days ago was "}
        {count > 0 && days + " days from today is "}
        {count === 0 && "Today is "}
        {addDays(currentDate, days).toDateString()}
      </div>
      <br />
      <hr />
      <h1>Exercise 2</h1>
      <StepsRange steps={steps} setSteps={setSteps} />
      <CounterBox count={count} setCount={setCount} />
      <br />
      <div>
        {count < 0 && Math.abs(days) + " days ago was "}
        {count > 0 && days + " days from today is "}
        {count === 0 && "Today is "}
        {addDays(currentDate, days).toDateString()}
      </div>
    </div>
  );
}

function Steps({ steps, setSteps }) {
  function handleMinus() {
    if (steps > 1) setSteps((s) => s - 1);
  }

  function handlePlus() {
    if (steps < 10) setSteps((s) => s + 1);
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <span>Step: {steps}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

function StepsRange({ steps, setSteps }) {
  return (
    <div>
      <input
        type="range"
        min={1}
        max={10}
        onChange={(e) => setSteps(e.target.value)}
        value={steps}
      />
      <span>{steps}</span>
    </div>
  );
}

function CounterBox({ count, setCount }) {
  function handleMinus() {
    setCount((c) => c - 1);
  }

  function handlePlus() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button type="button" onClick={handleMinus}>
        -
      </button>
      <input
        type="text"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      <button type="button" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

function Counter({ count, setCount }) {
  function handleMinus() {
    if (count > -99) setCount((c) => c - 1);
  }

  function handlePlus() {
    if (count < 99) setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <span>Count: {count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
