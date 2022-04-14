import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input01 from "../../src/commons/input"
import Button01 from "../../src/commons/button"
import styled from "@emotion/styled"

const Error = styled.div`
  color: red;
  font-size: 14px;
`

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요").max(5, "이름은 5글자 이내로 입력해야 합니다."),
  password: yup.string().required("비밀번호를 입력해주세요").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내입니다."),
  title: yup.string().required("제목을 입력해주세요").max(100, "제목은 100자 이내로 입력해야 합니다."),
  contents: yup.string().required("내용을 입력해주세요").max(1000, "내용은 1000자 이내로 작성해야 합니다.")
})

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string
}

export default function ReactHookFormwithYup() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onClickSubmit = (data: IFormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={register("writer")}/>
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호: <Input01 type="password" register={register("password")}/>
      <Error>{formState.errors.password?.message}</Error>
      제목: <Input01 type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <Input01 type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 isActive={formState.isValid} title="로그인하기"></Button01>
    </form>
  )
}