import React, { useState, useEffect } from 'eact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAddNote = () => {
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setNewNote({ title: '', content: '' });
  };

  const handleEditNote = (index, updatedNote) => {
    const newNotes = [...notes];
    newNotes[index] = updatedNote;
    setNotes(newNotes);
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className={`app ${darkMode? 'dark-mode' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Google Keep</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-sm btn-secondary"
                  onClick={handleToggleDarkMode}
                >
                  {darkMode? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container">
        <h1>Notes</h1>
        <form>
          <input
            type="text"
            value={newNote.title}
            onChange={(e) => setNewNote({...newNote, title: e.target.value })}
            placeholder="Title"
          />
          <textarea
            value={newNote.content}
            onChange={(e) => setNewNote({...newNote, content: e.target.value })}
            placeholder="Content"
          />
          <button onClick={handleAddNote}>Add Note</button>
        </form>
        <ul className="list-group">
          {notes.map((note, index) => (
            <li key={index} className="list-group-item">
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button
                onClick={() => handleEditNote(index, {...note, title: 'Edited Title' })}
              >
                Edit
              </button>
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;