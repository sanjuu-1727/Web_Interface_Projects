import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./pages/Todo";
import TaskDetails from "./pages/TaskDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </>
  );
}

export default App;
