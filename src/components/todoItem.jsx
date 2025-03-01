import React, { memo } from 'react';
import styles from './todoList.module.css'

function TodoItem({ todo, onDelete }) {
  return (
    <li  className={styles.itemcontainer}>
      <div>
        <h3>{todo.activity}</h3>
        <p><strong>Price:</strong> ${todo.price}</p>
        <p><strong>Type:</strong> {todo.type}</p>
        <p><strong>Booking Required:</strong> {todo.bookingRequired ? 'Yes' : 'No'}</p>
        <p><strong>Accessibility:</strong> {todo.accessibility}</p>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default memo(TodoItem);