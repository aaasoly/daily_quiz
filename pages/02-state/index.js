import { useState } from 'react'

export default function StateRefactoringPage () {

  // 1번
  const [ hello, setHello ] = useState("안녕하세요")

  // 2번
  const [ count, setCount ] = useState(0)

  // 3번
  const [ auth, setAuth ] = useState("000000")

  // 4번
  const [ email, setEmail ] = useState("")
  const [ emailError, setEmailError ] = useState("")
  const [ password1, setPassword1 ] = useState("")
  const [ password2, setPassword2 ] = useState("")
  const [ passwordError, setPasswordError ] = useState("")

  // 1번
  function onClickHello() {
    setHello("반갑습니다")
  }

  // 2번
  function onClickCount() {
    setCount(count + 1)
  }

  // 3번
  function onClickNumber() {
    const Token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    setAuth(Token)
  }

  // 4번
  function onChangeEmail(event) {
    setEmail(event.target.value)
  }
  function onChangePassword1(event) {
    setPassword1(event.target.value)
  }
  function onChangePassword2(event) {
    setPassword2(event.target.value)
  }

  function onClickSignup() {
    const corretEmail = email.includes("@")

    if(corretEmail === false) {
      setEmailError("이메일은 @를 포함해야 합니다.")
    } else {
      setEmailError("")
    }

    if(password1 !== password2) {
      setPasswordError("비밀번호와 비밀번호 확인은 같아야 합니다") 
    } else {
      setPasswordError("")
    }
  }


  return (

    <div>

      <button onClick={onClickHello}>{hello}</button>
      
      <div>
        <div>{count}</div>
        <button onClick={onClickCount}>카운트증가</button>
      </div>

      <div>
        <div>{auth}</div>
        <button onClick={onClickNumber}>인증번호전송</button>
      </div>

      <div>
        <div>이메일</div><input onChange={onChangeEmail} type="text" />
        <div style={{color:'red'}}>{emailError}</div>

        <div>비밀번호</div><input onChange={onChangePassword1} type="password" />
        <div>비밀번호 확인</div><input onChange={onChangePassword2} type="password" />
        <div style={{color:'red'}}>{passwordError}</div>

        <button onClick={onClickSignup}>가입하기</button>
      </div>

    </div>

  )

}