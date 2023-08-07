import { useState, useCallback, useEffect } from "react";

import Info from "./Info";

const Suhang3411_04 = () => {
  const [color, setColor] = useState("");
  const [movie, setMovie] = useState("");

  const onChangeHandler = useCallback((e) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  }, []);

  useEffect(() => {
    console.log("onChangeHandler이 변경되었습니다.");
  }, [onChangeHandler]);

  return (
    <div className="App">
      <div>
        <label>
          당신이 좋아하는 무지게 색깔은(영어단어) ?
          <input id="color" value={color} onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        당신이 좋아하는 영화 장르는 ?
        <label>
          <input
            type="radio"
            name="movie"
            value="Marriage Story"
            onChange={onChangeHandler}
          />
          드라마
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="The Fast And The Furious"
            onChange={onChangeHandler}
          />
          액션
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="Avengers"
            onChange={onChangeHandler}
          />
          슈퍼 히어로
        </label>
      </div>
      <Info color={color} movie={movie} />
    </div>
  );
};

export default Suhang3411_04;