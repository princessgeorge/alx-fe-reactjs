import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/profile">Go to Profile</Link>
      <br />
      <Link to="/blog/1">Go to Blog Post 1</Link>
    </div>
  );
};

export default Home;
