import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick =  (buttonText) => {
    if(buttonText === 'C'){

    }
    else if(buttonText === '='){

    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  

  return (
    <div className={styles.Calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
