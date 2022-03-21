import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard( $writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
` 

export default function CreatBoardInputPage() {

  const [ userName, setUserName ] = useState("")
  const [ userTitle, setUserTitle ] = useState("")
  const [ userContents, setUserContents ] = useState("")

  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation(CREATE_BOARD)

  const callGraphqlAPI = async() => {
    const result = await callAPI({
      variables: { writer: userName, title: userTitle, contents: userContents}
    })
    console.log(result)
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
  }

  const onChangeWriter = (event) => {
    setUserName(event.target.value)
  }
  const onChangeTitle = (event) => {
    setUserTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setUserContents(event.target.value)
  }

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} /> <br/>
      제목 : <input type="text" onChange={onChangeTitle} /> <br/>
      내용 : <input type="text" onChange={onChangeContents} /> <br/>
      <button onClick={callGraphqlAPI}>게시물 등록하기</button>
    </div>
  )
}