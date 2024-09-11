import { Link } from "react-router-dom";
import Form from "../atom/Form";
import Input from "../atom/input";

const CustomForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    // key value 추출
    //const { name, age } = e.target.value;
    //const obj = {name: name.value, age: age.value};
    //obj 생성
    const obj = {};
    const { target } = e;
    for (let i = 0; i < target.length; i++) {
      if (target[i] && target[i].type !== "submit")
        obj[target[i].name] = target[i].value;
      return obj;
    }

    console.log(obj);
  };
  return (
    <>
      <Link to={"/"}>home</Link>
      <Link to={"/test"}>test</Link>
      <Form onSubmit={onSubmitHandler}>
        <Input name="name" />
        <br />
        <Input name="age" />
        <br />
        <Input type="submit" />
      </Form>
    </>
  );
};

export default CustomForm;
