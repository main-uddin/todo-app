import "./App.css";
import Todo from "./components/todo";
import Inprogress from "./components/inprogress";
import Done from "./components/done";
import TodoForm from "./components/todo/TodoForm";

function App() {
  return (
    <div className="App">
      <h1 className="heading--wrapper">Todo App</h1>
      <TodoForm />
      <div className="wrapper">
        <Todo />
        <Inprogress />
        <Done />
      </div>
    </div>
  );
}

export default App;
