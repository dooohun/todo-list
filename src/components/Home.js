import { useState } from "react";
import { addTodo, deleteTodo, toggleTodo } from "../redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import * as s from "./styledComponents";
import "./Home.css"

export default function Home() {
  const [title, setTitle] = useState("");
  
  const onChange = (e) => {
    setTitle(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
  }

  const dispatch = useDispatch();

  const onClick = () => {
    const time = getTime();
    dispatch(addTodo({ title, time }));
  }

  function getTime() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${month}-${day} ${hour}:${minute}`;
}


  const currentState = useSelector((state) => state.todo);

  const handleClick = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    dispatch(deleteTodo(targetId));
  }

  const onCheck = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    const targetIsChecked = e.target.checked;
    dispatch(toggleTodo({ targetId, targetIsChecked }));
  }

  return (
    <s.MainContainer>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={onChange} />
        <button onClick={onClick}>ADD</button>
      </form>
      <s.TodoItems>
        {currentState.map((state) => (
          <s.TodoItem key={state.id} id={state.id}>
            <s.CheckBox type="checkbox" onChange={onCheck}/>
            <s.TextBox checked={state.isCompleted}>{state.title}</s.TextBox>
            <s.TimeBox>{state.time}</s.TimeBox>
            <s.DeleteImg src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={handleClick}/>
          </s.TodoItem>
        ))}
      </s.TodoItems>
    </s.MainContainer>
  )
}