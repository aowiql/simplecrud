import { useMutation, useQuery } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate } from "react-router-dom";
import { donePost } from "../../api/donePost";
import "./PostComponent.css";

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
  console.log("data", posts);
  const navigate = useNavigate();

  const goDetailPage = (id: number, boardPost: string) => {
    navigate(`/maindetail/${id}`, { state: { boardPost } });
  };

  const detalPageNavhandler = (id: number, key: number, boardPost: string) => {
    if (id === key) {
      goDetailPage(id, boardPost);
    }
  };

  const doneMutation = useMutation(
    ({ postId, boardDone }: { postId: number; boardDone: boolean }) =>
      donePost(backUrl, postId, boardDone),
    {
      onSuccess: (data) => {
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
            <div
              key={post.id}
              className="post"
              onClick={() =>
                detalPageNavhandler(post.id, post.id, post.boardPost)
              }
            >
              <div className="postTitle">{post.boardTitle}</div>
              <div className="postBody">{post.boardPost}</div>
              <button
                className="postBtn"
                onClick={() => handleOnClick(post.id, post.boardDone)}
              >
                보관함으로
              </button>
            </div>
          )
      )}
    </>
  );
};

export default PostComponent;
