export default function RegexPage() {

  console.log(/^\d{4}\.\d{2}\.\d{2}$/.test("2018.01.01"))
  console.log(/^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678"))
  console.log(/^\w+@\w+\.\w+$/.test("aaa@bbb.com"))

  return (
  <>
  <div>/^\d{4}\.\d{2}\.\d{2}$/.test("2018.01.01")</div>
  <div>/^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678")</div>
  <div>/^\w+@\w+\.\w+$/.test("aaa@bbb.com")</div>

  <div>true false 는 콘솔로 확인하기</div>
  </>)
}