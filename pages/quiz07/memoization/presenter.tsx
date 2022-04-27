import { memo } from "react"

function MemoizationPresenterPage() {

  console.log("당신은 알았습니까? 프레젠터가 렌더링 될 것이란 걸")
  
  return (
    <div>H i ~ I'm presenter ~</div>
  )
}

export default memo(MemoizationPresenterPage)