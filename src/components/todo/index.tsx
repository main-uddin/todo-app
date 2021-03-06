import Item from "./Item";

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
    <div className="todo-wrapper">

      <h1>Default List</h1>
      {sortItems
        ?.filter((f) => f.status === "default")
        .map((item) => (
          <Item key={item.id} item={item} />
        ))}
    </div>
  );
};
export default Index;
