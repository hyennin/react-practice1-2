import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "예금":
    return { count: state.count + action.payload };
    case "출금":
    return { count: state.count - action.payload };
    default:
    return state;
  }
}

const Suhang3411_03 = () => {
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count: 0}) 

  return (
    <div>
      <h2>은행에 오신 것을 환영합니다.</h2>
      <p>잔고 : {state.count}원</p>
      <input
        type={number}
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"  
      />
      <button onClick={() => dispatch({ type: "예금", payload: number })}>예금</button>
      <button onClick={() => dispatch({ type: "출금", payload: number })}>출금</button>
    </div>
  )
}

export default Suhang3411_03;