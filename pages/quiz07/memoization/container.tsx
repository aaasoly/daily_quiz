import { useCallback, useMemo, useState } from "react"
import MemoizationPresenterPage from "./presenter"

export default function MemoizationContainerPage () {

  console.log("컨테이너 렌더링완")

  let countLet = 0
  const [countState, setCountState] = useState(0)

  // CountLet useMemo
  // const onClickCountLet = useMemo(() => {
  //   countLet += 1
  // }, [])

  // CountLet useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1)
    countLet += 1
  }, [])

  // onClickCountState 선언
  // const onClickCountState = () => {
  //   console.log(countState + 1)
  //   setCountState(countState + 1)
  // }

  // CountState useCallback
  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1)
  }, [])

  // useMemo 로 useCallback
  // const onClickCountState = useMemo(() => {
  //   return () => {
  //     setCountState((prev) => prev + 1)
  //   }
  // }, [])

  return (
    <>
    <h1>여긴 컨테이너지롱^ㅠ^</h1>
    <div>count(let): {countLet} </div>
    <button onClick={onClickCountLet}>count(let) 올리기</button>

    <div>count(state): {countState} </div>
    <button onClick={onClickCountState}>count(state) 올리기</button>

    {/* JSX에서 직접 작성 */}
    {/* <button onClick={() => {
      setCountState((prev) => prev + 1)
    }}>count(state) 올리기</button> */}

    <div style={{margin: "10px 0", width:"500px", borderTop:"2px dotted #a066ab"}}></div>

    <MemoizationPresenterPage />
    </>
  )
}