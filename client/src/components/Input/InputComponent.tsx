import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import React, { useState } from "react";
import { addPostBackend } from "../../api/addPost";

import { InputPageDiv, InputTitle, PostInput, InputBtn } from "./InputStyle";

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
    <InputPageDiv>
      <InputTitle>
        <input
          type="text"
          value={inputTitle}
          onChange={titleHaandler}
          placeholder="제목"
        />
      </InputTitle>
      <PostInput>
        <textarea
          value={inputPost}
          placeholder="본문"
          onChange={postHandler}
          className="boardPost"
        />
      </PostInput>

      <InputBtn className="inputBtn">
        <button onClick={goBack}>이전</button>
        <button onClick={inputHandler}>입력</button>
      </InputBtn>
    </InputPageDiv>
  );
};

export default InputComponent;
