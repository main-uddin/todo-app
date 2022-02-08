import "./App.css";
import Todo from "./components/todo";
import Inprogress from "./components/inprogress";
import Done from "./components/done";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Todo />
        <Inprogress />
        <Done />
      </div>
    </div>
  );
}

export default App;
