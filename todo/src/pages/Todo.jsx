import { useState } from "react";
import { Link } from "react-router-dom";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setTask("");
  }

  function completeTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div className="page">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((item) => (
          <li key={item.id}>
            <span
              className={item.completed ? "completed" : ""}
              onClick={() => completeTask(item.id)}
            >
              {item.text}
            </span>
            <div>
              <Link
                className="view-btn"
                to={`/task/${item.id}`}
                state={{ task: item }}
              >
                View
              </Link>
              <button onClick={() => deleteTask(item.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
