import { useQuery, gql } from "@apollo/client";
import Board from "../../src/commons/14-pagination/Board";
import Pagination from "../../src/commons/14-pagination/Pagination";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int){
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
    }
  }
`

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount{
    fetchBoardsCount
  }
`


export default function BoardPagination(){
  const { data, refetch } = useQuery(FETCH_BOARDS)
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

  return (
    <div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  )

}