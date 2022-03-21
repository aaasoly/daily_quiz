export default function DocumentRefactoringPage () {

  function onClickHello() {
    const changeHello = "반갑습니다"
    document.getElementById("hello").innerText = changeHello
  }

  function onClickCount() {
    const changeNumber = Number(document.getElementById("count").innerText)+1
    document.getElementById("count").innerText = changeNumber
  }

  function onClickNumber() {
    const randomToken = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("authNumber").innerText = randomToken
  }

  return (

    <div>

    <div>
      <button id="hello" onClick={onClickHello}>안녕하세요</button>
    </div>

    <div>
      <div id="count">0</div>
      <button onClick={onClickCount}>카운트증가</button>
    </div>

    <div>
      <div id="authNumber">000000</div>
      <button onClick={onClickNumber}>인증번호전송</button>
    </div>

    </div>

  )
}