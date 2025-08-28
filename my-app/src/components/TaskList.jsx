import React from "react";
import Task from "./Task";
const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    // mapping through tasks and rendering Task component for each task
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;