import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { donePost } from "../../api/donePost";
import {
  DetailDiv,
  DetailedPostDiv,
  DetailedP,
  DetailedH1,
  DetailBtn,
} from "./MainDetailStyle";

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
    <DetailDiv>
      <DetailedPostDiv>
        <DetailedH1>test {id}</DetailedH1>
        <DetailedP>{boardPost}</DetailedP>
      </DetailedPostDiv>
      <div>
        <DetailBtn onClick={goBack}>뒤로</DetailBtn>
        <DetailBtn onClick={doneHandler}>보관함으로</DetailBtn>
      </div>
    </DetailDiv>
  );
};

export default MainDetail;
