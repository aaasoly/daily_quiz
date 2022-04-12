import { useState } from "react"

export default function UseStatePage(){
  const [state, setState] = useState(0)

  const onClickCounter = () => {
    setState(qwer => qwer + 1)
  } 
  

  return (
    <>
    <div>카운트 : {state}</div>
    <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  )
}