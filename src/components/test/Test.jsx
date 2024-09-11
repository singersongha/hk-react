import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Test = () => {
  const [timer, setTimer] = useState(new Date().toLocaleString());
  const [refresh, setRefresh] = useState(0);
  const onRefresh = () => {
    setRefresh(refresh + 1);
  };
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleString());
    }, 1000);
    return clearInterval(interval);
  }, [refresh]);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 2000);
  //   setTimer(new Date().toLocaleString());
  // }, [refresh]);
  // if (loading) return <h1>...</h1>;
  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/test"}>test</Link>
      <h1>{timer}</h1>
      <h1>{refresh}</h1>
      <button onClick={onRefresh}>fffffffff</button>
    </div>
  );
};

export default Test;
