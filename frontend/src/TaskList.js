import React, { useEffect, useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const completeTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'PUT', body: JSON.stringify({ completed: true }) })
      .then((res) => res.json())
      .then((updatedTask) => setTasks((tasks) => tasks.map((task) => (task._id === id ? updatedTask : task))));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks((tasks) => tasks.filter((task) => task._id !== id)));
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task._id} task={task} onComplete={completeTask} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
