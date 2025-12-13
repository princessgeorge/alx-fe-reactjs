import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return (
    <div>
      <h2>Post ID: {postId}</h2>
      <p>This is a dynamically routed post page.</p>
    </div>
  );
};

export default Post;
