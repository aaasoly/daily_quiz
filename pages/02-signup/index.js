import { Wrapper,
  Title,
  Form,
  Email,
  Name,
  Phone,
  PhoneNumber,
  Auth,
  AuthNumber,
  AuthBtn,
  Timer,
  Timeset,
  Assign,
  Cities,
  CityOption,
  Gender,
  GenderOption,
  DivideLine,
  SignupBtn, 
  Password,
  EmailError,
  PasswordError} from '../../styles/signup'

import { useState } from 'react'

export default function SignupPage (){

  const [ email, setEmail ] = useState("")
  const [ emailError, setEmailError ] = useState("")
  const [ password1, setPassword1 ] = useState("")
  const [ password2, setPassword2 ] = useState("")
  const [ passwordError, setPasswordError ] = useState("")

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
    
    <Wrapper>
      <Title>코드캠프 회원가입</Title>

      <Form>
        <Email type="text" placeholder="이메일을 입력해 주세요" onChange={onChangeEmail}/>
        <EmailError>{emailError}</EmailError>
        <Name type="text" placeholder="이름을 입력해 주세요" />
        <Password type="password" placeholder="비밀번호를 입력해 주세요" onChange={onChangePassword1}/>
        <PasswordError>{passwordError}</PasswordError>
        <Password type="password" placeholder="비밀번호를 확인해 주세요" onChange={onChangePassword2}/>
        <PasswordError>{passwordError}</PasswordError>
      </Form>

      <Phone>
        <PhoneNumber type="text" /> ㅡ
        <PhoneNumber type="text" /> ㅡ
        <PhoneNumber type="text" />
      </Phone>

      <Auth>
        <AuthNumber>000000</AuthNumber>
        <AuthBtn>인증번호 전송</AuthBtn>
      </Auth>

      <Timer>
        <Timeset>3:00</Timeset>
        <Assign>인증 확인</Assign>
      </Timer>

      <Cities>
          <CityOption>지역을 선택하세요</CityOption>
          <CityOption>서울</CityOption>
          <CityOption>인천</CityOption>
          <CityOption>경기</CityOption>
      </Cities>

      <Gender>
        <GenderOption type="radio" />여성
        <GenderOption type="radio" />남성
      </Gender>

      <DivideLine></DivideLine>

      <SignupBtn onClick={onClickSignup}>가입하기</SignupBtn>


    </Wrapper>




  )


}