import styled from "styled-components";

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailedPostDiv = styled.div`
  margin: 40px;
  padding: 70px;
  opacity: 1;
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

export { DetailDiv, DetailedPostDiv, DetailedP, DetailedH1, DetailBtn };
