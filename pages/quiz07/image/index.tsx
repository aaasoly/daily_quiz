import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

export default function UploadImage() {

  const { register, handleSubmit } = useForm();

  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {

        setImageUrl(data.target?.result);
        setFile1(file); 
      }
    };
  };

  const onClickSubmit = async (data) => {

    const result1 = await uploadFile({
      variables: { file: file1 },
    });

    const imageUrl = result1.data.uploadFile.url;

    try{
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            images: [imageUrl]
          },

        }
      })
      console.log(result.data.createBoard._id)
    } catch(error){
      console.log(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)} >
      작성자 : <input type="text" {...register("writer")}/><br />
      <br />
      비밀번호 : <input type="password" {...register("password")}/> <br />
      <br />
      제목 : <input type="text"{...register("title")}/> <br />
      <br />
      내용 : <input type="text"{...register("contents")}/> <br />
      <br />
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button>저장하기</button>
      </form>

    </div>
  );
}