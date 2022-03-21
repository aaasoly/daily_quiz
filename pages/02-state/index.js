import { useState } from "react"

export default function StateRefactoringPage () {

  const [ hello, setHello ] = useState("안녕하세요")
  const [ count, setCount ] = useState(0)
  const [ auth, setAuth ] = useState(000000)

  function changeHello() {
    useState("반갑습니다")
  }

  function changeCount() {
    useState( count + 1 )
  }

  function changeNumber() {
    const Token = String(Math.floor( Math.random * 1000000 )).padStart(6,"0")
    useState(Token)
  }


  return (

    <div>

      <button onClick={changeHello}>{hello}</button>

      <button onClick={changeCount}>{count}</button>

      <div>
        {auth}
        <button onClick={changeNumber}>인증번호전송</button>
      </div>

    </div>

  )

}