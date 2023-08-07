import { useRef, useState } from "react";

const Suhang3411_05 = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const timerId = useRef(0);

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  }

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
  }

  const resetTimer = () => {
    renders.current++;
    setSeconds(0);
  }
  
  return (
    <div>
      <input
        type="text"
        value={randomInput}c
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br/><br/>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <br/><br/>
      <p>Seconds: {seconds}</p>
      <p>{randomInput}</p>
    </div>
  )
}

export default Suhang3411_05;