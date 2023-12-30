import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import style from "./App.module.css";
import Display from "./Component/Display";
import Buttons from "./Component/Buttons";

function App() {
  let [calval, setCalval] = useState(" ");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval(" ");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalval(newDisplayValue);
    }
  };
  return (
    <div className={style.calculator}>
      <Display displayValue={calval}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
