import { useState } from "react";
import Log from "./components/Log";

const Test2 = () => {
  const [text, setText] = useState("");
  const [logs, setLogs] = useState([]);
  const onChangeText = (e) => {
    setText(e.target.value);
    setLogs([...logs, e.target.value]);
  };

  // 조건부 렌더링
  return (
    <div>
      <input name="text" onChange={onChangeText} />
      <Log />
      {logs.map((str, i) => i % 2 === 0 && <Log i={i} str={str} />)}
    </div>
  );
};

export default Test2;
