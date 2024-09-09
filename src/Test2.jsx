import { useState } from "react";

const Test2 = () => {
  const [text, setText] = useState("");
  const [logs, setLogs] = useState([]);
  const onChangeText = (e) => {
    setText(e.target.value);
    setLogs([...logs, e.target.value]);
  };
  return (
    <div>
      <input name="text" onChange={onChangeText} />
      {logs.map((str) => (
        <p>{str}</p>
      ))}
    </div>
  );
};

export default Test2;
