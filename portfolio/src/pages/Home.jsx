import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home page">
      <div className="home-content">
        <h1>Hello, I'm Sanjeev</h1>
        <h2>AI & Data Science Student</h2>
        <p>
          Welcome to my portfolio. I am interested in web development, programming and creating innovative projects.
        </p>
        <Link to="/contact" className="button">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
