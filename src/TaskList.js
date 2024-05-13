import { useMemo, useState } from "react";
import Task from "./Task";

function TaskList({ tasks, toggleTaskChecked, deleteTask }) {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const sortByChecked = (a, b) =>
    a.checked === b.checked ? 0 : a.checked ? 1 : -1;

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.checked);
    } else if (filter === "uncompleted") {
      return tasks.filter((task) => !task.checked);
    } else {
      return tasks;
    }
  }, [tasks, filter]);

  const sortedTasks = useMemo(
    () => filteredTasks.slice().sort(sortByChecked),
    [filteredTasks]
  );

  return (
    <>
      <div>
        <button
          className="filter-btn"
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
        <button
          className="filter-btn"
          onClick={() => handleFilterChange("uncompleted")}
        >
          Uncompleted
        </button>
      </div>
      <ul id="list-container">
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskChecked={toggleTaskChecked}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
