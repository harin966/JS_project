//import Button from "./Button";
//import style from "./App.module.css";
import { useState, useEffect } from "react";


function App4() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      //fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((responce) => responce.json())
      .then((json) => {
          setCoins(json);
          setLoading(false);
      });
  }, []) // App 이 render 될따 딱 한번만 실행된다. 

  useEffect(() => {ß
      console.log(coins);
  }, [coins])
  return (
      <div>
          <h1>The Coins!</h1>
          {loading ? <strong>Loading...</strong> : (
              <div>
              <strong>we have {coins.length} coins</strong>
              <br></br>
              <select>
                  <option></option>
                  {coins.map((coin) => (
                      <option>
                          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                      </option>))}
              </select>
              </div>)}     
          {/* <ul>
              {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
          </ul> */}
      </div>);
}

function App3() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {setTodo(event.target.value)};
  const onSubmit = (event) => {
      event.preventDefault(); //refresh 막아주기 
      console.log(todo);
      if(todo === ""){
          return;
      }
      setTodo(""); // todo = ""; 라고 할수 없다. state 를 바로 바꾸는건 불가능 항상 함수를 통해야 함
      setTodos((currentArray) => [todo, ...currentArray]); // 분해해서 붙여준다. 
      // modify 해주는 함수에 함수를 보내면 
      // 첫번쨰 항목(currentArray) 는 현재 상태로 보내고 return 하는 값으로 state 를 변경
  };
  console.log(todos);
  return (
      <div>
          <h1>My Todos ({todos.length})</h1>
          <form onSubmit = {onSubmit}>
              <input onChange={onChange} value={todo} type="text" placeholder="Write you todo..." />
              <button>Add Todo</button>
          </form>
          <hr />
          <ul>
              {todos.map((item, idx) => <li key={idx}>{item}</li>)} 
          </ul>
          {/*map 는 array 안의 모든 항목을 돌면서 함수를 실행하고 결과를 return 으로 반환*/}
      </div>)
}

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

