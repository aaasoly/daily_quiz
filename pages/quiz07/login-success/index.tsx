import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../src/commons/store"

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`

export default function LoginSuccessPage(){

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const router = useRouter()

  useEffect(() => {
    if (!accessToken){
      alert("로그인을 먼저 해주세요.")
      router.push("/quiz07/login")
    }
  })
  
  const { data } = useQuery(FETCH_USER_LOGGED_IN)
  return (
    <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
  )
}