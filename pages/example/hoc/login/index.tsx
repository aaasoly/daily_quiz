import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../../src/commons/store"


const LOGIN_USER = gql`
  mutation loginUser($email:String!, $password: String!){
    loginUser(email: $email, password:$password){
      accessToken
    }
  }
`


export default function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")  
  const [loginUser] = useMutation(LOGIN_USER)
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const router = useRouter()

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password
      }
    })
    const accessToken = result.data.loginUser.accessToken
    setAccessToken(accessToken)
    localStorage.setItem("accessToken", accessToken)
    alert("로그인에 성공하였습니다!!");
    router.push("/example/hoc/main")
  }

  

  return (

    <>
    이메일 : <input type="text" onChange={onChangeEmail}/> 
    <br/>
    비밀번호 : <input type="password" onChange={onChangePassword}/>
    <br/>
    <button onClick={onClickLogin}>로그인</button>
    </>
  )
}