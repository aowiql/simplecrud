import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate } from "react-router-dom";
import { deleteBackend } from "../../api/deletePost";
import { donePost } from "../../api/donePost";
import React from "react";
import { PostDiv, PostTitle, PostBody, PostBtn } from "./DoneComponentStyle";

interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

const DoneComponent = () => {
  const backUrl = "http://localhost:8080";

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (postId: number) => deleteBackend(backUrl, postId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const { data: posts, refetch } = useQuery<Posts[]>("posts", () =>
    getPosts(backUrl)
  );

  const navigate = useNavigate();

  const goDetailPage = (id: number, boardPost: string) => {
    navigate(`/donedetail/${id}`, { state: { boardPost } });
  };

  const detailPageNavHandler = (id: number, key: number, boardPost: string) => {
    if (id === key) {
      goDetailPage(id, boardPost);
    }
  };

  const deleteHandler = async (postId: number) => {
    try {
      await mutation.mutateAsync(postId);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const doneMutation = useMutation(
    ({ postId, boardDone }: { postId: number; boardDone: boolean }) =>
      donePost(backUrl, postId, boardDone),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleOnClick = async (postId: number, boardDone: boolean) => {
    try {
      navigate("/donepage");
      await doneMutation.mutateAsync({ postId, boardDone: !boardDone });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      {posts?.map(
        (post) =>
          !post.boardDone && (
            <>
              <PostDiv key={post.id}>
                <PostTitle
                  className="postTitle"
                  onClick={() =>
                    detailPageNavHandler(post.id, post.id, post.boardPost)
                  }
                >
                  {post.boardTitle}
                </PostTitle>
                <PostBody
                  className="postBody"
                  onClick={() =>
                    detailPageNavHandler(post.id, post.id, post.boardPost)
                  }
                >
                  {post.boardPost}
                </PostBody>
                <PostBtn
                  className="postBtn"
                  onClick={() => deleteHandler(post.id)}
                >
                  삭제
                </PostBtn>
                <PostBtn
                  className="postBtn"
                  onClick={() => handleOnClick(post.id, post.boardDone)}
                >
                  복구
                </PostBtn>
              </PostDiv>
            </>
          )
      )}
    </>
  );
};

export default DoneComponent;
