import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>
    </>
  );
}

export default HomePage;
