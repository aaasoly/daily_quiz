import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Button01 from "../../src/commons/button";
import Input01 from "../../src/commons/input";
import { useForm } from "react-hook-form";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
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
  }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!){
    deleteBoard(boardId: $boardId)
  }
`

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 40%;
`;
const Error = styled.div`
  color: red;
  font-size: 14px;
`

export default function MapBoardPage() {
  const [createBoard] = useMutation(CREATE_BOARD)
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARDS);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange"
  })

  const onClickSubmit = async (data) => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents
        },
      },
      update(cache, {data}) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]
            }
          }
        })
      }
    })
  }

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      // cache, useQuery의 결과
      update(cache, { data }) {
        // data 안에 deleteBoard
        const deletedId = data.deleteBoard; // deleteBoard 를 실행하고 남은 return 값
        cache.modify({
          fields: {
            // 현재 페치보드 상태(prev)에서 삭제된 보드 지우기
            fetchBoards: (prev, { readField }) => {
              // _id가 배열로 저장된 prev에서 deletedId 와 같은 _id 제거
              // filter로 삭제된 _id와 다른 데이터만 남겨서 return 해주기
              // el._id 를 사용할 수 없기 때문에 readField로 el 에서 _id를 꺼내온다.
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          }, // global state 를 수정했기 때문에 사용하는 모든 컴포넌트에서 업데이트 된다
        });
      }, // variables 요청 후 cache 를 업데이트
    });
  };
  // const onClickDelete = (boardId) => async () => {
  //   await deleteBoard({
  //     variables: {boardId},
  //     update(cache, {data}){
  //       const deletedId = data.deleteBoard
  //       cache.modify({
  //         fields: {
  //           fetchBoards: (prev, {readField}) => {
  //             const filteredPrev = prev.filter(
  //               (el) => readField("_id", el) !== deletedId
  //             )
  //             return [...filteredPrev]
  //           }
  //         }
  //       })
  //     }
  //   })
  // }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{(el._id).slice(0,5)}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickDelete(el._id)}>x</button>
        </MyRow>
      ))}

      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <Input01 type="text" register={register("writer")}/>
        <Error>{formState.errors.writer?.message}</Error>
        비밀번호: <Input01 type="password" register={register("password")}/>
        <Error>{formState.errors.password?.message}</Error>
        제목: <Input01 type="text" register={register("title")} />
        <Error>{formState.errors.title?.message}</Error>
        내용: <Input01 type="text" register={register("contents")} />
        <Error>{formState.errors.contents?.message}</Error>
        <Button01 isActive={formState.isValid} title="등록하기"></Button01>
      </form>
    </div>
  );
}
