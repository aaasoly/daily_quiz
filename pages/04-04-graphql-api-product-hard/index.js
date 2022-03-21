import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_PRODUCT = gql`
  mutation {
    createProduct( seller: "죠르디", 
    createProductInput: 
    {name: "팝니다", detail: "라이언 속눈썹", price: 20000}){
      _id
      number
      message
    }
  }
`

export default function CreatProductPage() {
  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation(CREATE_PRODUCT)

  const callGraphqlApi = async () => {
    const result = await callAPI()
    console.log(result)
    console.log(result.data.createProduct.message)
    setData(result.data.createProduct.message)
  }


  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
    </div>

  )

}