import { useState } from "react";

function App() {
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

export default App;