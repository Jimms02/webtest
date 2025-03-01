import React from 'react';

export default function TodoList({ activities }) {
  return (
    <div>
      {activities.length === 0 ? (
        <p>Nothing to do :(</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <h3>{activity.activity}</h3>
              <p><strong>Price:</strong> ${activity.price}</p>
              <p><strong>Type:</strong> {activity.type}</p>
              <p><strong>Booking Required:</strong> {activity.bookingRequired ? 'Yes' : 'No'}</p>
              <p><strong>Accessibility:</strong> {activity.accessibility}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}