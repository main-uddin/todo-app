import { useSelector } from "react-redux";
import { todos } from "../../redux/slice/todoSlice";
import Item from "../todo/Item";

import { TodoItem } from "../../interface";

const Index = () => {
  const todoItems = useSelector(todos);

  const sortItems = todoItems
    ?.slice()
    ?.filter((f) => f.status === "inprogress")
    ?.sort(
      (a: TodoItem, b: TodoItem) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <div>
      <h1>Inprogress</h1>

      {sortItems?.map((item) => (
        <>
          <Item key={item.id} item={item} />
        </>
      ))}
    </div>
  );
};

export default Index;
