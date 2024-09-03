import React from 'react';

const Task = ({ task, onComplete, onDelete }) => (
  <div>
    <h3>{task.title}</h3>
    <button onClick={() => onComplete(task._id)}>Complete</button>
    <button onClick={() => onDelete(task._id)}>Delete</button>
  </div>
);

export default Task;
