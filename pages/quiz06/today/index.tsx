import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  padding: 5px 5px;
`;

const List = styled.div`
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #bebebe;
`

const Today = styled.div`
  display: flex;
  flex-direction: column;
`

export default function BasketPage(){

  const { data } = useQuery(FETCH_BOARDS)
  const [isPicked, setIsPicked] = useState(false)
  
  const [todays, setTodays] = useState([])

  const pickTime = () => {
    const newdate = new Date()
    const yyyy = newdate.getFullYear()
    const mm = newdate.getMonth() + 1
    const dd = newdate.getDate()
    return `${yyyy}-${mm}-${dd}`
  }

  const pick = pickTime()

  useEffect(() => {
    setTodays(JSON.parse(localStorage.getItem(pick) || "[]" ))
  },[])

  const onClickPickItem = (el) => () => {
    setIsPicked(true)

    const pick = pickTime()

    const baskets = JSON.parse(localStorage.getItem(pick) || "[]")
      
    const temp = baskets.filter((basketEl) => basketEl._id === el._id)
      if(temp.length === 1){
        alert("이미 담긴 게시물입니다")
        return
      }

      

    const { __typename, ...newEl } = el
    baskets.push(newEl)
    localStorage.setItem(pick, JSON.stringify(baskets))
    const a = JSON.parse(localStorage.getItem(pick) || "[]")
    setTodays(a)
    console.log(todays)
  }
  
  

  return (
    <Wrapper>
      <List>
        {data?.fetchBoards.map((el) => (
          <MyRow key={el._id}>
            <MyColumn >{el.writer}</MyColumn>
            <MyColumn onClick={onClickPickItem(el)}>{el.title}</MyColumn>
            {/* <button onClick={onClickPickItem(el)}>게시물 담기</button> */}
          </MyRow>
        ))}
      </List>
        <Today>
          오늘 본 아이템
          {todays.map((el) => (
            <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
          ))}
        </Today>
      </Wrapper>
    )
}