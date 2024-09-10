import { useState } from "react";

import InputValue from "./InputValue";

const Form = () => {
  const [log, setLog] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleRegister = () => {
    setLog((prev) => [...prev, { name, age }]);
  };

  const handleSortName = () => {
    const sortLog = [...log].sort((a, b) =>
      order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setLog(sortLog);
    setOrder(!order);
  };

  return (
    <div>
      <InputValue setName={setName} setAge={setAge} />
      <button onClick={handleRegister}>등록</button>
      <p>
        <input name="search" onChange={(e) => setSearch(e.target.value)} />
      </p>
      <div>
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th style={{ border: "1px solid black" }} onClick={handleSortName}>
              name
            </th>
            <th style={{ border: "1px solid black" }}>age</th>
            <th style={{ border: "1px solid black" }}>수정</th>
            <th style={{ border: "1px solid black" }}>삭제</th>
          </tr>
          {log
            .filter(({ name }) => !search || name.includes(search))
            .map(({ name, age }) => (
              <tr key={name}>
                <td style={{ border: "1px solid black" }}>{name}</td>
                <td style={{ border: "1px solid black" }}>{age}</td>
                <td style={{ border: "1px solid black" }}>수정</td>
                <td style={{ border: "1px solid black" }}>삭제</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Form;
