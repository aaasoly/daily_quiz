import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../../src/commons/store"
import { withAuth } from "../../../../src/components/commons/example/withAuth"

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`

function Main(){

  const { data } = useQuery(FETCH_USER_LOGGED_IN)

  return (
    <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
  )
}

export default withAuth(Main)