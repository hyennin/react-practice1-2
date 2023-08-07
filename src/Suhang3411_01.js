import { useState } from "react"

const Suhang3411_01 = () => {
  const [time, setTime] = useState(0);
  const handleClick = () => {
    setTime(time + 1);
    console.log('time 업데이트 -> ', time);
  }

  return (
    <div>
      <br/>
      <p>현재시간: {time}시</p>
      <br/>
      <button onClick={handleClick}>update</button>
    </div>
  )
}

export default Suhang3411_01;