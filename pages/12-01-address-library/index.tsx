import DaumPostcode from "react-daum-postcode";

export default function AddressLibraryPage() {
  // // 확인버튼 클릭시 주소에 대한 데이터 들어옴
  const handleComplete = (data) => {
    console.log(data);
  };

  return (
    <>
          <DaumPostcode onComplete={handleComplete} />
    </>
  );
}
