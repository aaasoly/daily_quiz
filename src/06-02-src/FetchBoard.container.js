import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import FetchBoardUI from "./FetchBoard.presenter"
import { FETCH_BOARD } from "./FetchBoard.queries"

export default function FetchBoard(){
  const router = useRouter()
  console.log(router)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number:  Number(router.query.number) }
  }) // 중괄호!! useState랑 헷갈리지 말기

  return (
    <FetchBoardUI 
      data={data}/>
  )
}