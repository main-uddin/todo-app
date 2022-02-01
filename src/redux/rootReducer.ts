import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
});

export default rootReducer;
