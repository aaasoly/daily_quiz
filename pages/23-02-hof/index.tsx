export default function HofPage() {
  const onClickButton = (num) => (event) => {
    console.log(num)
  }

  return (
    <div>
      <button onClick={onClickButton(123)}>클릭!!!</button>
    </div>
  )
}