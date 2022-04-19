import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  padding: 5px 5px;
`;

export default function ListItem(props) {
  const [isPicked, setIsPicked] = useState(false)

  const onClickPickItem = (el) => () => {
    setIsPicked(true)

  const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    
  const temp = baskets.filter((basketEl) => basketEl._id === el._id)
    if(temp.length === 1){
      const deletedBaskets = baskets.filter((basketEl) => basketEl._id !== el._id)
      setIsPicked(false)
      return localStorage.setItem("baskets", JSON.stringify(deletedBaskets))
    }

  const { __typename, ...newEl } = el
  baskets.push(newEl)
  localStorage.setItem("baskets", JSON.stringify(baskets))
  }

  return (
    <MyRow key={props.el._id}>
      <MyColumn>{props.el.writer}</MyColumn>
      <MyColumn>{props.el.title}</MyColumn>
      <button onClick={onClickPickItem(props.el)}>{isPicked ? "담기 취소" : "게시물 담기"}</button>
    </MyRow>
  )
}