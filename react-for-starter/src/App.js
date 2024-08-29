//import Button from "./Button";
//import style from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
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
export default App;

