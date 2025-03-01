"use client"

import React, { useState } from 'react';
import TodoForm from '@/components/todoForm';
import TodoList from '@/components/todoList';
import styles from './page.module.css'

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>TO-DO LIST</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Home;