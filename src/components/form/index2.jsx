import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [log, setLog] = useState([]);
  const [search, setSearch] = useState("");

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
        {/*list 그리기*/}
        {log
          .filter(({ name }) => !search || name.includes(search))
          .map(({ name, age }) => (
            <div>
              <p>name:{name}</p>
              <p>age:{age}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Form;
