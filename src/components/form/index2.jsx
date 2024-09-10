import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [log, setLog] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");

  const handleSortName = () => {
    const sortLog = [...log].sort((a, b) =>
      order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setLog(sortLog);
    setOrder(!order);
  };

  const onChangeInput = (e) => {
    setName(e.target.value);
    //setLog(text);
  };

  const onChangeNumber = (e) => {
    setAge(Number(e.target.value));
    //setLog(number);
  };

  const handleRegister = () => {
    setLog((prev) => [...prev, { name, age }]);
  };

  return (
    <div className="">
      <div>
        <label>name</label>
        <input type="text" name="name" onChange={onChangeInput} />
      </div>
      <div>
        <label>age</label>
        <input type="number" name="age" onChange={onChangeNumber} />
        <button onClick={handleRegister}>등록</button>
        <p>
          <input name="search" onChange={(e) => setSearch(e.target.value)} />
        </p>
      </div>
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
