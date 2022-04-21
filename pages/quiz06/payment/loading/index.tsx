import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function PaymentLoading () {

  const router = useRouter()
  const [amount, setAmount] = useState(100);

  const onClick500 = () => {
    setAmount(500)
  }

  const onClick1000 = () => {
    setAmount(1000)
  }

  const onClick2000 = () => {
    setAmount(2000)
  }

  const onClick5000 = () => {
    setAmount(5000)
  }

  const requestPay = () => {
    const IMP = window.IMP; 
    IMP.init("imp22434667")

    
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: amount,
        buyer_email: "helloworld@aaa.com",
        buyer_name: "죠르디",
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          alert("결제에 성공했습니다!")
          router.push("/quiz06/payment/complete")
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };


  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <div>충전하실 금액을 선택한 뒤 충전하기 버튼을 눌러주세요</div>
      <input type="radio" name="point" onClick={onClick500} />500
      <br/>
      <input type="radio" name="point" onClick={onClick1000} />1000
      <br/>
      <input type="radio" name="point" onClick={onClick2000} />2000
      <br/>
      <input type="radio" name="point" onClick={onClick5000} />5000
      <br/>
      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}