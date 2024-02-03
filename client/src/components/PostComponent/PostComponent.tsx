import { useMutation, useQuery } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate } from "react-router-dom";
import { donePost } from "../../api/donePost";

import {
  PostComponentDiv,
  PostComponentTitles,
  PostComponentBody,
  PostBtn,
} from "./PostComponentStyle";

interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

const PostComponent = () => {
  const backUrl = "http://localhost:8080";

  const { data: posts, refetch } = useQuery<Posts[]>("posts", () =>
    getPosts(backUrl)
  );

  const navigate = useNavigate();

  const goDetailPage = (id: number, boardPost: string, boardTitle: string) => {
    navigate(`/maindetail/${id}`, { state: { boardPost, boardTitle } });
  };

  const detalPageNavhandler = (
    id: number,
    key: number,
    boardTitle: string,
    boardPost: string
  ) => {
    if (id === key) {
      goDetailPage(id, boardPost, boardTitle);
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
      await doneMutation.mutateAsync({ postId, boardDone: !boardDone });
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      {posts?.map(
        (post) =>
          post.boardDone && (
            <PostComponentDiv key={post.id}>
              <PostComponentTitles
                onClick={() =>
                  detalPageNavhandler(
                    post.id,
                    post.id,
                    post.boardTitle,
                    post.boardPost
                  )
                }
              >
                {post.boardTitle}
              </PostComponentTitles>
              <PostComponentBody
                onClick={() =>
                  detalPageNavhandler(
                    post.id,
                    post.id,
                    post.boardTitle,
                    post.boardPost
                  )
                }
              >
                {post.boardPost}
              </PostComponentBody>
              <PostBtn onClick={() => handleOnClick(post.id, post.boardDone)}>
                보관함으로
              </PostBtn>
            </PostComponentDiv>
          )
      )}
    </>
  );
};

export default PostComponent;
