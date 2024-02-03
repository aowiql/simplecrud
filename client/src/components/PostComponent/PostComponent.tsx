import { useQuery } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate, useParams } from "react-router-dom";

interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

const PostComponent = () => {
  const backUrl = "http://localhost:8080";

  const { data: posts } = useQuery<Posts[]>("posts", () => getPosts(backUrl));

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
            </>
          )
      )}
    </>
  );
};

export default PostComponent;
