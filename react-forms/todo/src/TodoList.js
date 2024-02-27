import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((task, index) => (
        <Todo key={index} task={task} removeTodo={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;