import styled from "@emotion/styled"

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "gray")};
`
interface Iprops {
  isActive?: boolean,
  title: string
}

export default function Button01(props: Iprops){

  return <Button isActive={props.isActive}>{props.title}</Button>
}