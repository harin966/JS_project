//import Button from "./Button";
//import style from "./App.module.css";
import { useState, useEffect } from "react";

function App2() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onchange = (event) => {setKeyWord(event.target.value)};
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes");
  }, [keyword,counter]);
  //console.log("search for", keyword);
  return (
    <div>
      <input value={keyword} onChange={onchange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
// state 가 바뀌면 컴포넌트 안의 모든 코드들은 다시 render 된다. 
// useEffect 는 언제 코드가 바뀔지 선택할 수 있다. 
function Hello() {
  function createdFn() {
    console.log("created :)");
    return destroyedFn;
  }
  function destroyedFn() {
    console.log("destroyed :(");
  }
  useEffect(createdFn, []) // 컴포넌트가 만들어질 때 한번만 실행 됨(생성자, 소멸자)

  return <h1>Hello</h1>;
}

function App1() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing((prev) => !prev)};
  return (
    <div>  
      {showing ? <Hello /> : null} 
      {/*여기서 컴포넌트를 계속 새로 만들어 주고 있는거임*/}
      <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
    </div>
  );
}

//export default App;
export default App1;

