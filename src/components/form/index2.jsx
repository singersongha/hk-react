import { useState } from "react";
import InputValue from "./InputValue";
import "./index.css";

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

  const handleDelete = (nameToDelete) => {
    const updatedLog = log.filter(({ name }) => name !== nameToDelete);
    setLog(updatedLog);
  };

  return (
    <div>
      <InputValue setName={setName} setAge={setAge} />
      <button onClick={handleRegister}>등록</button>
      <p>
        <input name="search" onChange={(e) => setSearch(e.target.value)} />
      </p>
      <div>
        <table>
          <tr>
            <th onClick={handleSortName}>name</th>
            <th>age</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
          {log
            .filter(({ name }) => !search || name.includes(search))
            .map(({ name, age }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{age}</td>
                <td>수정</td>
                <td onClick={() => handleDelete(name)}>삭제</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Form;
