import { useLocation, useParams } from "react-router-dom";

const MainDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const boardPost = location.state?.boardPost || "";

  return (
    <>
      <h1>test {id}</h1>
      <p>{boardPost}</p>
    </>
  );
};

export default MainDetail;
