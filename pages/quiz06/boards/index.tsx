import { useQuery, gql } from "@apollo/client";

import ListItem from "../list";

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

export default function BasketPage(){

  const { data } = useQuery(FETCH_BOARDS)
  
  return (
    <div>
        {data?.fetchBoards.map((el) => (
          <ListItem key={el._id} el={el}/>
        ))}
      </div>
      )
}