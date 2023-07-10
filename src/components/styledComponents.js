import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const TodoItems = styled.ul`
  padding: 0px;
  width: 430px;
  height: 400px;
  box-shadow: 2px 3px 5px 0px black;
`

export const TodoItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  height: 20px;
  margin-bottom: 3px;
`

export const TextBox = styled.div`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  width: 290px;
`

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`

export const TimeBox = styled.div`
  width: 90px;
`

export const DeleteImg = styled.img`
  width: 20px;
  height: 20px;
`