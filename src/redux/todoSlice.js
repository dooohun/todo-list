import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        title: action.payload.title,
        id: Date.now(),
        isCompleted: false,
        time: action.payload.time
      })
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.targetId) {
          return {...todo, isCompleted: action.payload.targetIsChecked}
        }
        return todo;
      })
    }
  }
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;