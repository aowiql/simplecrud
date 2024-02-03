import styled from "styled-components";

const MainPosts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: center;
  padding: 20px;
`;

const MainPostsBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MainPostBtn = styled.button`
  border: none;
  background-color: #e10b7b;
  border-radius: 10px;
  width: 190px;
  height: 60px;
  color: white;
  font-size: 25px;
  transition: transform 0.2s ease;
  margin: 50px 40px 50px 0;

  &:hover {
    transform: scale(1.1);
  }
`;

export { MainPostBtn, MainPosts, MainPostsBtnDiv };
