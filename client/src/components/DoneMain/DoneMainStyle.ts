import styled from "styled-components";

const DoneMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin: 50px 0 50px 0;
    border: none;
    background-color: #e10b7b;
    border-radius: 10px;
    width: 120px;
    height: 70px;
    color: white;
    font-size: 23px;
    margin-right: 25px;
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const DoneMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export { DoneMain, DoneMainDiv };
