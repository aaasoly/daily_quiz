import styled from "@emotion/styled";

export const WriterInput = styled.input`
  padding: 5px 5px;
  margin-bottom: 10px;
  border-color: blueviolet;
`

export const TitleInput = styled.input`
  padding: 5px 5px;
  margin-bottom: 10px;
  border-color: blueviolet;
`

export const ContentsInput = styled.input`
  padding: 5px 5px;
  margin-bottom: 10px;
  border-color: blueviolet;
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.isActive ? "blueviolet" : "gray"};
  color: ${(props) => props.isActive ? "white" : "gray"};
  padding: 5px 5px;
`