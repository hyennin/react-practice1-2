import Counter from "./Counter";
import { useMemo, useState } from "react";
import Info from "./Info";
import Timer from "./Timer";

const hardCalculate = (number) => {
  console.log('시간이 많이 걸리는 계산');
  for (let i = 0; i < 999999999; i++) { }

  return number + 10000;
}

const easyCalculate = (number) => {
  console.log('시간이 적게 걸리는 계산');

  return number + 1;
}

const App = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>시간이 많이 걸리는 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {hardSum}</span>

      <h3>시간이 적게 걸리는 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+10000 = {easySum}</span>
    </div>
  );
};

export default App;