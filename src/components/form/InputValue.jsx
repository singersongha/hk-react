const InputValue = ({ setAge, setName }) => {
  const onChangeInput = (e) => {
    setName(e.target.value);
  };

  const onChangeNumber = (e) => {
    setAge(Number(e.target.value));
  };

  return (
    <>
      <div>
        <label>name</label>
        <input type="text" name="name" onChange={onChangeInput} />
      </div>
      <div>
        <label>age</label>
        <input type="number" name="age" onChange={onChangeNumber} />
      </div>
    </>
  );
};

export default InputValue;
