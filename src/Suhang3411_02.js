import { useEffect, useState } from "react";

const Suhang3411_02 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(show) {
      console.log('Bye Toggle');
      console.log('Hi Toggle');
    }

    return () => {
      show ? console.log('Bye Toggle') : console.log('Hi Toggle')
    }
  }, [show]);

  return (
    <div>
      {show && <div style={{fontSize: 32}}>Toggle</div>}
      <button onClick={() => setShow(!show)}>{!show ? '안녕' : '잘가'} 토글</button>
    </div>
  )
}

export default Suhang3411_02;