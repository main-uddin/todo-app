import moment from "moment";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { TodoItem } from "../../interface";
import { removeItem, updateItem } from "../../redux/slice/todoSlice";
import { Button, Input } from "../uiFragments";
import "./index.css";

interface ItemProps {
  item: TodoItem;
}

const Item = ({ item }: ItemProps) => {
  const dispatch = useDispatch();
  const frmRef = useRef<HTMLFormElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inpRef.current) return;

    let text = inpRef.current.value;

    if (text?.trim()) {
      dispatch(updateItem({ ...item, text }));
    } else {
      alert("Text is required!");
    }
    handleCanceled();
  };

  const handleCanceled = () => {
    setIsUpdate(false);
  };

  const handleEdit = () => {
    setIsUpdate(true);
  };

  const handleDelete = () => {
    dispatch(removeItem({ ...item }));
  };

  return (
    <div>
      {isUpdate && (
        <form className="update__form" ref={frmRef} onSubmit={handleUpdate}>
          <Input forwardRef={inpRef} type="text" defaultValue={item?.text} />
          <span>
            <Button type="submit" color="#39BA43" value="Done" />
            <Button onClick={handleCanceled} color="#DC401F" value="Cancel" />
          </span>
        </form>
      )}
      {!isUpdate && (
        <div className="item-wrapper">
          <div>
            <div className="item__text">{item?.text}</div>
            <div className="item__time">
              {moment(item?.createdAt).format("MMM-D-YY, h:mm:ss a")}
            </div>
          </div>
          <span>
            <Button onClick={handleEdit} color="#3A92B6" value="Edit" />
            <Button onClick={handleDelete} color="#DC401F" value="Delete" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Item;
