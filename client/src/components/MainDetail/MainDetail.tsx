import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { donePost } from "../../api/donePost";
import {
  DetailDiv,
  DetailedPostDiv,
  DetailedP,
  DetailedH1,
  DetailBtn,
  ShowingDiv,
  InputPageDiv,
  InputTitle,
  PostInput,
  InputBtn,
} from "./MainDetailStyle";
import { putPostBackend } from "../../api/putPost";

const MainDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const title = location.state?.boardTitle;

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

  const [editing, setEditing] = useState(false);
  const [editedTile, setEditedTitle] = useState(title);
  const [editedPost, setEditPost] = useState(boardPost);

  const changeMode = () => {
    setEditing(!editing);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditPost(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
    }
  };

  const updatePostHandler = useMutation(
    (postId: number) => putPostBackend(backUrl, postId, editedPost, editedTile),
    {
      onSuccess: (data, postId) => {
        queryClient.invalidateQueries("posts");
        queryClient.refetchQueries("posts");
      },
      onError: (error) => {
        console.error("Error", error);
      },
    }
  );

  const handleUpdateClick = () => {
    updatePostHandler.mutate(Number(id));
    setEditing(!editing);
    navigate(`/maindetail/${Number(id)}`);
  };

  return (
    <DetailDiv>
      <DetailedPostDiv>
        {editing ? (
          <InputPageDiv>
            <InputTitle>
              <input
                type="text"
                value={editedTile}
                placeholder={boardPost}
                onChange={handleTitleChange}
                autoFocus
              />
            </InputTitle>

            <PostInput>
              <textarea
                value={editedPost}
                placeholder={boardPost}
                onChange={handlePostChange}
                onKeyPress={handleKeyPress}
                autoFocus
              ></textarea>
            </PostInput>
            <InputBtn>
              <button onClick={handleUpdateClick}>완료</button>
            </InputBtn>
          </InputPageDiv>
        ) : (
          <>
            <ShowingDiv>
              <DetailedH1 onClick={changeMode}>{title}</DetailedH1>
              <DetailedP>{boardPost}</DetailedP>
            </ShowingDiv>
          </>
        )}
      </DetailedPostDiv>
      <div>
        <DetailBtn onClick={goBack}>뒤로</DetailBtn>
        <DetailBtn onClick={doneHandler}>보관함으로</DetailBtn>
      </div>
    </DetailDiv>
  );
};

export default MainDetail;
