function TextRow({ newTask, handleTextChange, handleTaskAdd }) {
  // Function to handle key press event
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // If Enter key is pressed, trigger task addition
      handleTaskAdd();
    }
  };

  return (
    <div className="text-row">
      {/* Input field for task entry */}
      <input
        type="text"
        value={newTask}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress} // Listen for key press event
        placeholder="Add your task"
      />

      {/* Button to add task */}
      <button className="add-btn" onClick={handleTaskAdd}>
        Add
      </button>
    </div>
  );
}

export default TextRow;
