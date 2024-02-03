import { useLocation, useNavigate, useParams } from "react-router-dom";

const MainDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const boardPost = location.state?.boardPost || "";

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>test {id}</h1>
      <p>{boardPost}</p>
      <button onClick={goBack}>뒤로</button>
      <button>보관함으로</button>
    </>
  );
};

export default MainDetail;
