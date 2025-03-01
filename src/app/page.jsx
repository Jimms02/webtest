"use client"

import React, { useState, useEffect } from 'react';
import TodoForm from '@/components/todoForm';
import TodoList from '@/components/todoList';
import styles from './page.module.css'

function Home() {

  //initialize state from local, if not exist, empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // save to localStorage on  change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // add todo item to list
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // removes todo item to list
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>TO-DO LIST</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default Home;