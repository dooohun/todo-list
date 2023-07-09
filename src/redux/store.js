import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const TODO_TOGGLE = "TODO_TOGGLE";

export const addTodo = (title, id, time) => {
  return {
    type: ADD,
    title,
    id,
    isCompleted: false,
    time
  }
}
export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  }
}
export const todotoggle = (id, isCompleted) => {
  return {
    type: TODO_TOGGLE,
    id,
    isCompleted
  }
}

const reducer = (state = [], action) => { 
  switch (action.type) {
    case ADD: {
      return [...state,{
        title: action.title,
        id: action.id,
        isCompleted: false,
        time: action.time
      }]
    }
    case DELETE:
      return state.filter((todo) => todo.id !== action.id)
    case TODO_TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: action.isCompleted,
          }
        }
        return todo;
      });
    default:
      return state;
  }
}
  
const store = createStore(reducer)

export default store;