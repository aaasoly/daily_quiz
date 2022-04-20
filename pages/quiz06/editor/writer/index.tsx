import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Input01 from "../../../../src/commons/input";
import "react-quill/dist/quill.snow.css"
import { gql, useMutation } from "@apollo/client";
import Button01 from "../../../../src/commons/button";
import styled from "@emotion/styled";


const ReactQuill = dynamic(() => import("react-quill"), {ssr:false})

const ReactQuillInput = styled(ReactQuill)`
  width: 700px;
  height: 600px;
  margin-bottom: 30px;
`

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

export default function EditorWritePage(){
  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange"
  })

  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value)
    trigger("contents")
  }

  const onClickSubmit = async (data) => {
    if(!(data.writer&&data.password&&data.title&&data.contents)){
      alert("모두 입력해주세요")
      return
    }

    try{
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        }
      }
    })
    router.push(`/quiz06/editor/detail/${result.data.createBoard._id}`)
  } catch(error){
    alert(error.message)
  }
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 <Input01 type="text" register={register("writer")}/>
      <br/>
      비밀번호 <Input01 type="password" register={register("password")}/>
      <br/>
      제목 <Input01 type="text" register={register("title")}/>
      <br/>
      내용 <ReactQuillInput onChange={onChangeContents} />
      <br/>
      <Button01 title="등록하기"></Button01>
    </form>
  )
}