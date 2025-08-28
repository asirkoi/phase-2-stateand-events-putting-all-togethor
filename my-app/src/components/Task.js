import React from "react";

const Task = ({ text, category, onDeleteTask }) => {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onDeleteTask(text)}>Delete</button>
    </div>
  );
};

export default Task;