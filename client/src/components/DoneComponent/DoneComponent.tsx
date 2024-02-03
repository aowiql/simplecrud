import { useQuery } from "react-query";
import { getPosts } from "../../api/getPosts";
import { useNavigate } from "react-router-dom";

interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

const DoneComponent = () => {
  const backUrl = "http://localhost:8080";

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
            </>
          )
      )}
    </>
  );
};

export default DoneComponent;
