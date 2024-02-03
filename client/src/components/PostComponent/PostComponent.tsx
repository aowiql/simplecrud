import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/getPosts";

interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

const PostComponent = () => {
  const backUrl = "http://localhost:8080";

  const queryClient = useQueryClient();

  const { data: posts } = useQuery<Posts[]>("posts", () => getPosts(backUrl));

  return (
    <>
      {posts?.map((post) =>
        post.boardDone ? (
          <>
            <div>{post.boardTitle}</div>
          </>
        ) : (
          <>
            <div>{post.boardTitle}</div>
          </>
        )
      )}
    </>
  );
};

export default PostComponent;
