import { useNavigate } from "react-router-dom";
import PostComponent from "../PostComponent/PostComponent";
import { MainPostBtn, MainPosts, MainPostsBtnDiv } from "./MainComponentStyle";

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
      <MainPosts>
        <PostComponent />
      </MainPosts>
      <MainPostsBtnDiv>
        <MainPostBtn onClick={goInputPage}>게시글 작성</MainPostBtn>
        <MainPostBtn onClick={goDonePage}>보관함</MainPostBtn>
      </MainPostsBtnDiv>
    </>
  );
};

export default MainComponent;
