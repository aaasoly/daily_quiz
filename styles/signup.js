import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 540px;
  height: 960px;
  background: #FFFFFF;
  border: 1px solid #AACDFF;
  box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px 70px 52px;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: #0068FF;
  margin-bottom: 30px;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Email = styled.input`
  width: 380px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid #0068FF;
  border-radius: 7px;
  padding: 18px 14px;
`

export const EmailError = styled.div`
  color: red;
  font-size: 12px;
  padding: 10px 0;
`

export const Name = styled.input`
  width: 380px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid #0068FF;
  border-radius: 7px;
  padding: 18px 14px;
  margin-bottom: 20px;
`

export const Password = styled.input`
  width: 380px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid #0068FF;
  border-radius: 7px;
  padding: 18px 14px;
`

export const  PasswordError = styled.div`
  font-size: 12px;
  color: red;
  padding: 10px 0;
`

export const Phone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PhoneNumber = styled.input`
  width: 100px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  border-radius: 7px;
`

export const Auth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const AuthNumber = styled.div`
  color: #0068FF;
  font-size: 18px;
  margin-right: 21px;
`

export const AuthBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #0068ff;
  border-radius: 7px;
  font-size: 16px;
`

export const Timer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Timeset = styled.div`
  color: #0068FF;
  font-size: 18px;
  margin-right: 21px;
`

export const Assign = styled.button`
  width: 120px;
  height: 40px;
  background-color: #0068FF;
  border: 1px solid #0068ff;
  border-radius: 7px;
  color: #fff;
  font-size: 16px;
`

export const Cities = styled.select`
  width: 380px;
  height: 60px;
  background-color: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 7px;
  padding: 0 5px;
`

export const CityOption = styled.option`

`

export const Gender = styled.div`
  text-align: center;
  font-size: 16px;
`

export const GenderOption = styled.input`
`

export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #e6e6e6;
`

export const SignupBtn = styled.button`
    width: 380px;
  height: 75px;
  font-size: 18px;
  color: #0068ff;
  background-color: #fff;
  border: 1px solid #0068ff;
  border-radius: 10px;
`