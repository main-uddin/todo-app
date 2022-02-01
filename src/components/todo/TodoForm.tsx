import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem, todos } from "../../redux/slice/todoSlice";
import { Button, Input } from "../uiFragments";

const TodoForm = () => {
  const dispatch = useDispatch();
  const frmRef = useRef<HTMLFormElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!frmRef?.current || !inpRef?.current) return;

    const id = uuidv4();
    const createdAt = new Date().toString();
    const text = inpRef.current.value;

    const item = {
      id,
      createdAt,
      text,
    };

    if (text?.trim()) {
      dispatch(addItem(item));
    } else {
      alert("Text is required!");
    }

    frmRef.current.reset();
  };
  useEffect(() => {
    inpRef.current?.focus();
  }, []);

  return (
    <div className="create__form--wrapper">
      <form className="create__form" onSubmit={handleSubmit} ref={frmRef}>
        <Input forwardRef={inpRef} type="text" placeholder="TEXT" />
        <Button type="submit" color="#FFE90B" value="Add Item" />
      </form>
    </div>
  );
};
export default TodoForm;
