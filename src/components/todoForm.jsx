"use client"

import React, { useState } from 'react';

export default function todoForm({ addTodo }) {
  const [formData, setFormData] = useState({
    activity: '',
    price: '',
    type: 'education',
    bookingRequired: false,
    accessibility: 0.5
  });
  const [accessibilityValue, setAccessibilityValue] = useState(0.5);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
    setFormData({
      ...formData,
      [e.target.name]: value
    });

    if (e.target.name === 'accessibility') {
      setAccessibilityValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addTodo({ ...formData, id: Date.now() });
    
    // reset form
    setFormData({
      activity: '',
      price: '',
      type: 'education',
      bookingRequired: false,
      accessibility: 0.5
    });
    setAccessibilityValue(0.5);
  };

  return (
    <div>
      <h2>Add New To-Do item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="activity">Activity:</label>
          <input 
            type="text" 
            id="activity" 
            name="activity" 
            value={formData.activity}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div>
          <label htmlFor="price">Price:</label>
          <input 
            type="number" 
            id="price" 
            name="price" 
            value={formData.price}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div>
          <label htmlFor="type">Type:</label>
          <select 
            id="type" 
            name="type" 
            value={formData.type}
            onChange={handleChange}
            required 
          >
            <option value="Education">Education</option>
            <option value="Recreational">Recreational</option>
            <option value="Social">Social</option>
            <option value="Diy">DIY</option>
            <option value="Charity">Charity</option>
            <option value="Cooking">Cooking</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Music">Music</option>
            <option value="Busywork">Busywork</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="bookingRequired">
            <input 
              type="checkbox" 
              id="bookingRequired" 
              name="bookingRequired" 
              checked={formData.bookingRequired}
              onChange={handleChange}
            /> 
            Booking Required
          </label>
        </div>
        
        <div>
          <label htmlFor="accessibility">Accessibility:</label>
          <input 
            type="range" 
            id="accessibility" 
            name="accessibility" 
            min="0" 
            max="1" 
            step="0.1" 
            value={formData.accessibility}
            onChange={handleChange}
          />
          <span>{accessibilityValue}</span>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}