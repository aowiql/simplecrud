import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { donePost } from "../../api/donePost";
import "./MainDetail.css";

const MainDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const boardPost = location.state?.boardPost || "";

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const backUrl = "http://localhost:8080";

  const queryClient = useQueryClient();

  const boardDone = location.state?.boardDone;

  const doneMutation = useMutation(
    (postId: number) => donePost(backUrl, postId, boardDone),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        navigate("/");
      },
    }
  );

  const doneHandler = async () => {
    try {
      await doneMutation.mutateAsync(Number(id));
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="detail">
      <div className="detailPost">
        <h1>test {id}</h1>
        <p>{boardPost}</p>
      </div>
      <div className="detailBtn">
        <button onClick={goBack}>뒤로</button>
        <button onClick={doneHandler}>보관함으로</button>
      </div>
    </div>
  );
};

export default MainDetail;
