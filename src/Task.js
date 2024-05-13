function Task({ task, toggleTaskChecked, deleteTask }) {
  const handleTaskClick = () => {
    toggleTaskChecked(task.id);
  };
  const handleTaskDelete = (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  };
  return (
    <>
      <li
        className={task.checked ? "checked" : "unchecked"}
        onClick={handleTaskClick}
      >
        {task.task}
        <span onClick={handleTaskDelete}>&times;</span>
      </li>
    </>
  );
}

export default Task;
