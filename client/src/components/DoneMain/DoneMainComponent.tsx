import { useNavigate } from "react-router-dom";
import DoneComponent from "../DoneComponent/DoneComponent";
import "./DoneMainComponent.css";

const DoneMainComponent = () => {
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate("/");
  };

  return (
    <div className="doneMain">
      <div className="doneMainDiv">
        <DoneComponent />
      </div>
      <button onClick={goMainPage}>메인으로</button>
    </div>
  );
};

export default DoneMainComponent;
