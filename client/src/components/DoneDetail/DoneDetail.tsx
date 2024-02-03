import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBackend } from "../../api/deletePost";

const DoneDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const boardPost = location.state?.boardPost || "";

  const navigate = useNavigate();

  const goDonePage = () => {
    navigate("/donepage");
  };

  const backUrl = "http://localhost:8080";

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (postId: number) => deleteBackend(backUrl, postId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        navigate("/donepage");
      },
    }
  );

  const deleteHandler = async (postId: number) => {
    try {
      await mutation.mutateAsync(postId);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <h1>test {id}</h1>
      <p>{boardPost}</p>
      <button onClick={() => deleteHandler(Number(id))}>삭제</button>
      <button onClick={goDonePage}>뒤로가기</button>
    </>
  );
};

export default DoneDetail;
