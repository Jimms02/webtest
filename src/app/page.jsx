"use client"

import React, { useState } from 'react';
import TodoForm from '@/components/todoForm';
import TodoList from '@/components/todoList';
import styles from './page.module.css'

function Home() {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <div className={styles.container}>
      <h1>TO-DO LIST</h1>
      <TodoList activities={activities} />
      <TodoForm addActivity={addActivity} />
    </div>
  );
}

export default Home;