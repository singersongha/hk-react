import { useState } from "react"

const Calc = () => {
  const [result, setResult] = useState(0);
  const [target, setTarget] = useState(0);
  const onChangeTarget = (e) => setTarget(Number(e.target.value))
  const add = () => {setResult(result+target);}

  return <div>
    <input type="number" onChange={onChangeTarget} />
    <button onClick={}>+</button>
  </div>
}

export default Calc;