// import axios from 'axios'
import { ChangeEvent, useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { CheckFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { LikeOutlined } from '@ant-design/icons'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  } # 한 번에 여러 정보를 받아올 수 있기 때문에 $writer 같은 데이터를 안과 밖에 모두 써준다
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [data, setData] = useState("");
  const [callAPI] = useMutation(CREATE_BOARD); // const [함수이름]

  const callGraphqlApi = async () => {
    const result = await callAPI({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: title,
          contents: contents,
          images: [imageUrl],
        },
      },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  // 이벤트 핸들러 함수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isVaild = CheckFileValidation(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자 : <input type="text" onChange={onChangeWriter} /><br />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} /> <br />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} /> <br />
      <br />
      내용 : <input type="text" onChange={onChangeContents} /> <br />
      <br />
      <div>
          <LikeOutlined onClick={onClickImage}/> <br />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        {/* multiple : 드래그 해서 파일 여러개 선택 가능! */}
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>저장하기</button>
    </div>
  );
}
