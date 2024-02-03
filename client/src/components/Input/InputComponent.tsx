import { useNavigate } from "react-router-dom";
import "./InputComponent.css";

const InputComponent = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="inputPage">
      <div className="titleInput">
        <input placeholder="제목" />
      </div>
      <div className="postInput">
        <textarea placeholder="본문" className="boardPost"></textarea>
      </div>
      <div className="inputBtn">
        <button onClick={goBack}>이전</button>
        <button>입력</button>
      </div>
    </div>
  );
};

export default InputComponent;
