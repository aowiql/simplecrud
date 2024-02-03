import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate } from "react-router-dom";
import { deleteBackend } from "../../api/deletePost";

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

  const { data: posts } = useQuery<Posts[]>("posts", () => getPosts(backUrl));

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

  return (
    <>
      {posts?.map(
        (post) =>
          !post.boardDone && (
            <>
              <div
                key={post.id}
                onClick={() =>
                  detailPageNavHandler(post.id, post.id, post.boardPost)
                }
              >
                {post.boardTitle}
              </div>
              <button onClick={() => deleteHandler(post.id)}>삭제</button>
            </>
          )
      )}
    </>
  );
};

export default DoneComponent;
