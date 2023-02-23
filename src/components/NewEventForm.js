import "./NewEventForm.css";
import React, { useState, useRef } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, date);
    const newEvent = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(newEvent);
    resetForm();
  };
  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Event Date:</span>
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Event Location</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
