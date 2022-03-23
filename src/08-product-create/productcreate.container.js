// 컨테이너 프로덕트

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './productcreate.queries'
import CreatProductUI from './productcreate.presenter'
import { useRouter } from 'next/router'

export default function ProductCreate(props) {
  const router = useRouter()

  const [ seller, setSeller ] = useState("")
  const [ name, setName ] = useState("")
  const [ detail, setDetail ] = useState("")
  const [ price, setPrice ] = useState("")

  const [ createProduct ] = useMutation(CREATE_PRODUCT)
  const [ updateProduct ] = useMutation(UPDATE_PRODUCT)

  const onClickUpdate = async () => {
    try {
    await updateProduct({
      variables: { 
        productId: (router.query.productId),
        updateProductInput: {
          name: name,
          detail: detail,
          price: price
        }}
    })
    alert("상품 수정에 성공하였습니다!!!")
    router.push(`/08-product/${router.query.productId}`) 
    } catch(error) {
      alert(error.message)
    }             
  }

  const onClickSubmit = async() => {
    try { 
      const result = await createProduct({
      variables: { 
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price
        }},
    })
    alert("상품 등록에 성공하였습니다!!!")
    router.push(`/08-product/${result.data.createProduct._id}`)
  } catch(error) {
    alert(error.message)
    }
  }

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeDetail = (event) => {
    setDetail(event.target.value)
  }
  const onChangePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  return (
    <CreatProductUI 
    onClickSubmit={onClickSubmit}
    onClickUpdate={onClickUpdate}

    onChangeSeller={onChangeSeller}
    onChangeName={onChangeName}
    onChangeDetail={onChangeDetail}
    onChangePrice={onChangePrice}
    isEdit={props.isEdit}/>
  )
}