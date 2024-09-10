import { useState } from "react";
import { calc } from "../feature/calc";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(Number(e.target.value));
  };

  const onChangeResult = (targetFunc) => {
    const newResult = targetFunc(result, input);
    setResult(newResult);
  };

  return (
    <div>
      <h1>{result}</h1>
      <input type="number" onChange={handleInput} />
      <div className="grid">
        {calc.map((obj) => (
          <button onClick={() => onChangeResult(obj.func)}>{obj.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
