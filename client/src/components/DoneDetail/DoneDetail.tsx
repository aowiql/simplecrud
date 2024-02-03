import { useLocation, useParams } from "react-router-dom";

const DoneDetail = () => {
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

export default DoneDetail;
