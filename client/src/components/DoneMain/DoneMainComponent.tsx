import { useNavigate } from "react-router-dom";
import DoneComponent from "../DoneComponent/DoneComponent";
import { DoneMain, DoneMainDiv } from "./DoneMainStyle";

const DoneMainComponent = () => {
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate("/");
  };

  return (
    <DoneMain>
      <DoneMainDiv>
        <DoneComponent />
      </DoneMainDiv>
      <button onClick={goMainPage}>메인으로</button>
    </DoneMain>
  );
};

export default DoneMainComponent;
