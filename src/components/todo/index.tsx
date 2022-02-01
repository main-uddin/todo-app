import Item from "./Item";
import TodoForm from "./TodoForm";

import { useSelector } from "react-redux";
import { todos } from "../../redux/slice/todoSlice";
import "./index.css";
import { TodoItem } from "../../interface";

const Index = () => {
  const todoItems = useSelector(todos);
  const sortItems = todoItems
    ?.slice()
    ?.sort(
      (a: TodoItem, b: TodoItem) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  return (
    <div className="wrapper">
      <h1>Todo App</h1>
      <TodoForm />
      {sortItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Index;
