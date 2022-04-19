import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button01 from "../../../src/commons/button";
import Input01 from "../../../src/commons/input";
import { Modal, Button } from 'antd';

export default function Login(){
  const router = useRouter()

  const { register, handleSubmit }  = useForm({
    mode: "onChange"
  })

  const onClickSubmit = (data) => {
    if(JSON.parse(localStorage.getItem("baskets"))){
      if (confirm("비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?")) {
        router.push("/quiz06/basket")
      } else {
        router.push("/quiz06/boards")
      }
      
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일 <Input01 type="text" register={register("email")}></Input01><br/>
      비밀번호 <Input01 type="password" register={register("password")}></Input01>
      <Button01 title="로그인하기"></Button01>
    </form>
  )
}