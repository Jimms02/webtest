import React, { memo } from 'react';
import styles from './todoList.module.css'
import TodoItem from './todoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <h2><span>{todos.length} items</span></h2>
      {todos.length === 0 ? (
        <p>Nothing to do :(</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(TodoList);