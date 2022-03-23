// 프레전터 프로덕트

export default function CreatProductUI(props) {


  return (
    <div>
      판매자 : <input type="text" onChange={props.onChangeSeller} /> <br/>
      상품명 : <input type="text" onChange={props.onChangeName} /> <br/>
      상품내용 : <input type="text" onChange={props.onChangeDetail} /> <br/>
      상품가격 : <input type="number" onChange={props.onChangePrice} /> <br/>
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>{props.isEdit? "수정" : "등록"} 하기</button>
    </div>
  )
}