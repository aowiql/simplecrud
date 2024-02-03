import { useNavigate } from "react-router-dom";
import "./InputComponent.css";
import { useMutation, useQueryClient } from "react-query";
import React, { useState } from "react";
import { addPostBackend } from "../../api/addPost";

const InputComponent = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const backUrl = "http://localhost:8080";

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    () => addPostBackend(backUrl, inputTitle, inputPost),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        navigate("/");
      },
    }
  );

  const [inputTitle, setInputTitle] = useState("");

  const [inputPost, setInputPost] = useState("");

  const titleHaandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const postHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputPost(e.target.value);
  };

  const inputHandler = () => {
    if (inputTitle.trim() !== "" && inputPost.trim() !== "") {
      mutate();
    } else {
      if (inputTitle === "") {
        alert("제목을 입력하세요");
      } else if (inputPost === "") {
        alert("본문을 입력하세요");
      }
    }
  };

  return (
    <div className="inputPage">
      <div className="titleInput">
        <input
          type="text"
          value={inputTitle}
          onChange={titleHaandler}
          placeholder="제목"
        />
      </div>
      <div className="postInput">
        <textarea
          value={inputPost}
          placeholder="본문"
          onChange={postHandler}
          className="boardPost"
        />
      </div>
      <div className="inputBtn">
        <button onClick={goBack}>이전</button>
        <button onClick={inputHandler}>입력</button>
      </div>
    </div>
  );
};

export default InputComponent;
