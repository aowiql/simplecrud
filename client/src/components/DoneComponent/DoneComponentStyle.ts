import styled from "styled-components";

const PostDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin: 20px;
  border-radius: 5px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PostTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  width: 70%;
  height: 20px;
  opacity: 0.5;
`;

const PostBody = styled.div`
  white-space: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  height: 150px;
  width: 70%;
  max-height: 120px;
  margin-bottom: 50px;
  opacity: 0.5;
`;

const PostBtn = styled.button`
  border: none;
  background-color: #11b0de;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 16px;
  margin-right: 25px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export { PostDiv, PostTitle, PostBody, PostBtn };
