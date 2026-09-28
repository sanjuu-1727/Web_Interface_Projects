import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My To-Do App</h2>
      <Link to="/">To-Do List</Link>
    </nav>
  );
}

export default Navbar;
