import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamically routed blog post.</p>
    </div>
  );
};

export default BlogPost;
