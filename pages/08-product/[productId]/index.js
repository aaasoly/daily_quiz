// 상세보기 페이지

import { useQuery, gql } from "@apollo/client"
import { useRouter } from 'next/router'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
      fetchProduct(productId: $productId){
        _id
        seller
        name
        detail
        price
      }
    }
`

export default function FetchProductPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId }
  })

  console.log(data)

  const onClickMove = () => {
    router.push(`/08-product/${router.query.productId}/edit`)
  }

  return (
    <div>
      <div>판매자 : {data?.fetchProduct.seller}</div>
      <div>상품명 : {data?.fetchProduct.name}</div>
      <div>상품내용 : {data?.fetchProduct.detail}</div>
      <div>가격 : {data?.fetchProduct.price}</div>
      <button onClick={onClickMove}>수정하러 이동하기</button>
    </div>
  )

}