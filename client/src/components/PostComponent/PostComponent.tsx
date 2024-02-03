import { useMutation, useQuery } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate, useParams } from "react-router-dom";
import { donePost } from "../../api/donePost";

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

  const { id } = useParams();

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
            <>
              <div
                key={post.id}
                onClick={() =>
                  detalPageNavhandler(post.id, post.id, post.boardPost)
                }
              >
                {post.boardTitle}
              </div>
              <button onClick={() => handleOnClick(post.id, post.boardDone)}>
                보관함으로
              </button>
            </>
          )
      )}
    </>
  );
};

export default PostComponent;
