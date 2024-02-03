import styled from "styled-components";

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailedPostDiv = styled.div`
  width: 100%;
  margin: 40px;
  padding: 70px;
  opacity: 1;
`;

const ShowingDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const DetailedP = styled.p`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.5rem;
`;

const DetailedH1 = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;

const DetailBtn = styled.button`
  border: none;
  background-color: #11b0de;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 16px;
  margin-right: 25px;
  transition: transform 0.2s ease;
  margin-bottom: 50px;

  &:hover {
    transform: scale(1.1);
  }
`;

// input
const InputPageDiv = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  > input {
    font-size: 20px;
    width: 70%;
    height: 3vh;
    padding-left: 10px;
  }
`;

const PostInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > textarea {
    width: 70%;
    height: 50vh;
    margin-bottom: 30px;
    padding: 10px 0 0 10px;
    font-size: 20px;
    resize: none;
  }
`;

const InputBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > button {
    border: none;
    background-color: #e10b7b;
    border-radius: 10px;
    width: 70px;
    height: 50px;
    color: white;
    font-size: 25px;
    margin-right: 25px;
    transition: transform 0.2s ease;
  }

  &::hover {
    transform: scale(1.1);
  }
`;

export {
  DetailDiv,
  ShowingDiv,
  DetailedPostDiv,
  DetailedP,
  DetailedH1,
  DetailBtn,
  InputPageDiv,
  InputTitle,
  PostInput,
  InputBtn,
};
