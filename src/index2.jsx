import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [log, setLog] = useState("");

  const onChangeInput = (e) => {
    setText(e.target.value);
    setLog(text);
  };

  const onChangeNumber = (e) => {
    setNumber(Number(e.target.value));
    setLog(number);
  };

  const handleButton = () => {};

  return (
    <div>
      <div>
        <label>name</label>
        <input type="text" onChange={onChangeInput} />
      </div>
      <div>
        <label>age</label>
        <input type="number" onChange={onChangeNumber} />
        <button onClick={handleButton}>등록</button>
      </div>
      <div>
        <ul>
          <li>{text}</li>
        </ul>
        <ul>
          <li>{number}</li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
