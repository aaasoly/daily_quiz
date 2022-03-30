import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState()

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  // 확인버튼 클릭시 주소에 대한 데이터 들어옴
  const handleComplete = (data) => {
    console.log(data);
    setData(data.address)
    setIsOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달 열기
      </Button>
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isOpen && ( // isOpen이 true 면 Modal 보여줌
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {data}
    </>
  );
}
