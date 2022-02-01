import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FinalState, TodoItem } from "../../interface";
import { RootState } from "../../store";

const initialState: FinalState = {
  data: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TodoItem>) => {
      state.data = [...state.data, action.payload];
    },

    updateItem: (state, action: PayloadAction<TodoItem>) => {
      const items = state.data.filter(
        (item) => item?.id !== action.payload?.id
      );
      state.data = [...items, { ...action.payload }];
    },

    removeItem: (state, action: PayloadAction<TodoItem>) => {
      state.data = state.data.filter((item) => item?.id !== action.payload?.id);
    },
  },
});

export const { addItem, updateItem, removeItem } = todoSlice.actions;
export const todos = (state: RootState) => state.todo.data;

export default todoSlice.reducer;
