import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, { text: newNote, id: Date.now() }]);
    setNewNote('');
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
          placeholder="Add a new note"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;