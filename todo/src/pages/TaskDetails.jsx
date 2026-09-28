import { Link, useLocation } from "react-router-dom";

function TaskDetails() {
  const location = useLocation();
  const task = location.state?.task;

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
        <Link to="/">Back to To-Do List</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Task Details</h1>
      <div className="details">
        <h2>{task.text}</h2>
        <p>
          Status:{" "}
          {task.completed ? "Completed" : "Pending"}
        </p>
        <Link to="/">Back to To-Do List</Link>
      </div>
    </div>
  );
}

export default TaskDetails;
