import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function ComponentLifeCycle(){

  const [isChange, setIsChange] = useState(false)
  const router = useRouter()

  useEffect(() => {
    alert("Changed!!")
  },[isChange])

  useEffect(() => {
    alert("Rendered!")

    return () => {
      alert("Bye!!")
    }
  },[])

  const onClickChange = () => {
    setIsChange(true)
  }

  const onClickMove = () => {
    router.push("/")
  }

  return (
    <>
    <button onClick={onClickChange}>변경</button>
    <button onClick={onClickMove}>이동</button>
    </>
  )
}