import { useNavigate } from "react-router-dom";
import DoneComponent from "../DoneComponent/DoneComponent";

const DoneMainComponent = () => {
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <DoneComponent />
        <button onClick={goMainPage}>메인으로</button>
      </div>
    </>
  );
};

export default DoneMainComponent;
