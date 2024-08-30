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
        //setTodos((currentArray) => [todos, ...currentArray]);
        setTodos((currentArray) => [todo, ...currentArray]);

    };
    console.log(todos);
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input onChange={onChange} value={todo} type="text" placeholder="Write you todo..." />
                <button>Add Todo</button>
            </form>
        </div>)
}

export default App;