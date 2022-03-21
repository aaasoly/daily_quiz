import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation {
    createBoard( writer: "죠르디", title: "오늘 날씨 구림", contents: "구린 날엔 치킨이지!"){
      _id
      number
      message
    }
  }
`

export default function CreatBoardPage() {
  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    const result = await callAPI()
    console.log(result)
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
  }


  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
    </div>

  )

}