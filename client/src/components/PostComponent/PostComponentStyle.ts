import styled from "styled-components";

const PostComponentDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;

  margin: 20px;
  border-radius: 5px;
  padding: 25px;
`;

const PostComponentTitles = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
`;

const PostComponentBody = styled.div`
  white-space: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  height: 150px;
  max-height: 120px;
  margin-bottom: 50px;
`;

const PostBtn = styled.div`
  border: none;
  background-color: #11b0de;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 16px;
  margin-right: 25px;
  transition: transform 0.2s ease;
  padding: 15px 0 0 15px;

  &:hover {
    transform: scale(1.1);
  }
`;

export { PostComponentDiv, PostComponentTitles, PostComponentBody, PostBtn };
