import Header from "./Header";
import TextRow from "./TextRow";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";

function ToDoApp() {
  // Initialize task list and new task state
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    // Get saved task list from localStorage, initialize to an empty array if not found
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || [];
  });

  // Handle text input change event
  const handleTextChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add task
  const handleTaskAdd = () => {
    if (newTask.trim() !== "") {
      // Generate timestamp for task ID
      const timestamp = Date.now();
      // Add new task to the task list and clear input field
      setTasks([...tasks, { id: timestamp, task: newTask, checked: false }]);
      setNewTask("");
    }
  };

  // Toggle task checked state
  const toggleTaskChecked = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Store tasks array in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo-app">
      {/* Header component */}
      <Header />

      {/* TextRow component */}
      <TextRow
        newTask={newTask}
        handleTextChange={handleTextChange}
        handleTaskAdd={handleTaskAdd}
      />

      {/* TaskList component */}
      <TaskList
        deleteTask={deleteTask}
        toggleTaskChecked={toggleTaskChecked}
        tasks={tasks}
      />
    </div>
  );
}

export default ToDoApp;
