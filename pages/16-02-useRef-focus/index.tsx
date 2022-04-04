import { useEffect, useRef } from "react"

export default function PasswordFocus () {

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })

  return (
    <input type="password" ref={inputRef}/>
  )
}