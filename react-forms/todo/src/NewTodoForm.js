import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={handleChange}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;