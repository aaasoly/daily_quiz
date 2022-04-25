import axios from "axios";
import { useState } from "react";

export default function CallbackFriendsPage() {

  const [callbackRes, setCallbackRes] = useState([])
  const [promiseRes, setPromiseRes] = useState([])
  const [asyncAwaitRes, setAsyncAwaitRes] = useState([])

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send(); // 요청
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 랜덤숫자

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.userId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?useId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          const result = JSON.parse(res.target.response);
          setCallbackRes(result); // 최종결과값
          console.log(res)
        });
      });
    }); // 응답 오면 함수 실행시켜줘~ (콜백함수)
  };
  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      }) // return 하면 값이 다음 then 으로 들어간다
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setPromiseRes(res.data)
      })
      .catch((error)=>{
        console.log(error)
      });
  };

  const onClickAsyncawait = async () => {
    // 위에 있는 게 끝나야 아래로 내려간다. 순서가 명확함
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0]
    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;
    const res3 = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    setAsyncAwaitRes(res3.data)
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback</button>
      <div>
        결과:
        {callbackRes.map((el)=> (
          <div key="el.title">{el.title}</div>
        ))}
      </div>
      <br/>

      <button onClick={onClickPromise}>Promise</button>
      <div>
        결과:
        {promiseRes.map((el)=> (
          <div key="el.title">{el.title}</div>
        ))}
      </div>
      <br/>

      <button onClick={onClickAsyncawait}>결과: Async/Await</button>
      <div>
        결과:
        {asyncAwaitRes.map((el)=> (
          <div key="el.title">{el.title}</div>
        ))}
      </div>
    </div>
  );
}
