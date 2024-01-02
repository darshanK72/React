import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
      <Button count={count} setCount={setCount}></Button>
  );
}

function Button(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
      Counter {props.count}
  </button>
}

export default App;
