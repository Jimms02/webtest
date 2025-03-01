import React from 'react';
import styles from './todoList.module.css'

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <h2><span>({todos.length} items)</span></h2>
      {todos.length === 0 ? (
        <p>Nothing to do :(</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <div key={todo.id} className={styles.itemcontainer}>
              <li>
                <h3>{todo.todo}</h3>
                <p><strong>Price (RM):</strong> ${todo.price}</p>
                <p><strong>Type:</strong> {todo.type}</p>
                <p><strong>Booking Required:</strong> {todo.bookingRequired ? 'Yes' : 'No'}</p>
                <p><strong>Accessibility:</strong> {todo.accessibility}</p>
              </li>
              <button onClick={() => deleteTodo(todo.id)}  >
                Delete
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}