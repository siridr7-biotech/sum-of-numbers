
import React, { useState } from "react";

function App() {

  const [num, setNum] = useState("");
  const [result, setResult] = useState(0);

  const sum = () => {
    let numbers = num.split(",");
    let total = 0;

    numbers.forEach((n) => {
      total = total + Number(n);
    });

    setResult(total);
  };

  return (
    <div>
      <h1>Sum of N Numbers</h1>

      <input
        type="text"
        placeholder="Enter numbers"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={sum}>Calculate Sum</button>

      <h2>Sum = {result}</h2>
    </div>
  );
}

export default App;