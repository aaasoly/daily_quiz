import { useEffect, useState } from "react"
import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  margin-right: 20px;
`;

export default function BasketList(){
  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    setBasketItems(baskets)
  }, [])

  return (
    <div>
      {basketItems.map((el) => (
        <MyRow key={el._id}>
        <MyColumn>{el.writer}</MyColumn>
        <MyColumn>{el.title}</MyColumn>
      </MyRow>
      ))}
    </div>
  )
}