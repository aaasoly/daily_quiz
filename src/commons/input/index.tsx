import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
`

interface Iprops {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: Iprops) {
  return <Input type={props.type} {...props.register}/>
}