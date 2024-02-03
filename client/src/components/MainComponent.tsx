import { useNavigate } from "react-router-dom";
import PostComponent from "./PostComponent/PostComponent";

const MainComponent = () => {
  const navigate = useNavigate();

  const goInputPage = () => {
    navigate("/input");
  };

  const goDonePage = () => {
    navigate("/donepage");
  };

  return (
    <>
      <div>
        <PostComponent />
        <button onClick={goInputPage}>게시글 작성</button>
        <button onClick={goDonePage}>삭제된 게시글</button>
      </div>
    </>
  );
};

export default MainComponent;
