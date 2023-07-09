import { useState } from "react";
import { addTodo, deleteTodo, todotoggle } from "../store";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const TextBox = styled.div`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`
const TodoItems = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 0px;
`

export default function Home() {
  const [title, setTitle] = useState("");
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const onChange = (e) => {
    setTitle(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
  }

  const dispatch = useDispatch();

  const onClick = () => {
    const id = Date.now();
    dispatch(addTodo(title, id));
  }

  const currentState = useSelector((state) => state);

  const handleClick = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    dispatch(deleteTodo(targetId));
  }

  const onCheck = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    dispatch(todotoggle(targetId, e.target.checked));
    console.log(e.target.checked);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={onChange} />
        <button onClick={onClick}>ADD</button>
      </form>
      <ul>
        {currentState.map((state) => (
          <TodoItems key={state.id} id={state.id}>
            <input type="checkbox" onChange={onCheck}/>
            <TextBox checked={state.isCompleted}>{state.title}</TextBox>
            {`${month}-${day} ${hour}:${minute}`}
            <button onClick={handleClick}>X</button>
          </TodoItems>
        ))}
      </ul>
    </div>
  )
}