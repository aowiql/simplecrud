import { useQuery } from "react-query";
import { getPosts } from "../../api/getPosts";

interface Posts {
  id: number;
  boardTitle: string;
  boardPost: string;
  boardDone: boolean;
}

const DoneComponent = () => {
  const backUrl = "http://localhost:8080";

  const { data: posts } = useQuery<Posts[]>("posts", () => getPosts(backUrl));

  return (
    <>
      {posts?.map(
        (post) =>
          !post.boardDone && (
            <>
              <div>{post.boardPost}</div>
            </>
          )
      )}
    </>
  );
};

export default DoneComponent;
