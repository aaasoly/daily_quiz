import { useMutation, useQuery, gql } from "@apollo/client"
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
    query fetchProducts{
      fetchProducts{
        _id
        seller
        name
        detail
        price
      }
    }
  `

const DELETE_PRODUCT = gql `
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
      message
    }
  }
`
const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 16%;
`

export default function FetchDeleteProductsPage() {
  const [ deleteProduct ] = useMutation(DELETE_PRODUCT) 
  const { data } = useQuery(FETCH_PRODUCTS) 

  const onClickDelete = (event) => {
    deleteProduct({
      variables: {productId: event.target.id},
      refetchQueries: [{ query: FETCH_PRODUCTS }]
    })
  }

  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column><input type="checkbox"/ ></Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>
            <button id={el._id} onClick={onClickDelete}>삭제</button>
          </Column>
        </Row>



      ))}

    </div>

  )
}