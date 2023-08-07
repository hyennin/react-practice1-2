// App.js
import Suhang3411_01 from "./Suhang3411_01";
import Suhang3411_02 from "./Suhang3411_02";
import Suhang3411_03 from "./Suhang3411_03";
import Suhang3411_04 from "./Suhang3411_04";
import Suhang3411_05 from "./Suhang3411_05";
import { useInput } from "./useInput";

// function displayMessage(message) {
//   alert(message);
// }
const App = () => {
  // const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);
  
  return (
    <Suhang3411_02/>
    // <div>
    //   <h1>useInput</h1>
    //   <input value={inputValue} onChange={handleChange} />
    //   <button onClick={handleSubmit}>확인</button>
    // </div>
  );
};
export default App;