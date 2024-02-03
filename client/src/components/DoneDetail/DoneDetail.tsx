import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBackend } from "../../api/deletePost";

import {
  DetailDiv,
  DetailedPostDiv,
  DetailedP,
  DetailedH1,
  DetailBtn,
} from "./DoneDetailStyle";
import { donePost } from "../../api/donePost";

const DoneDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const boardPost = location.state?.boardPost || "";

  const boardDone = location.state?.boardDone;

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

  const doneMutation = useMutation(
    "posts",
    (postId: number) => donePost(backUrl, postId, boardDone),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        navigate(-1);
      },
    }
  );

  const doneHandler = async () => {
    try {
      await doneMutation.mutateAsync(Number(id));
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <DetailDiv>
      <DetailedPostDiv>
        <DetailedH1>{id}</DetailedH1>
        <DetailedP>{boardPost}</DetailedP>
      </DetailedPostDiv>
      <div>
        <DetailBtn onClick={() => deleteHandler(Number(id))}>삭제</DetailBtn>
        <DetailBtn onClick={() => doneHandler()}>복구</DetailBtn>
        <DetailBtn onClick={goDonePage}>뒤로가기</DetailBtn>
      </div>
    </DetailDiv>
  );
};

export default DoneDetail;
