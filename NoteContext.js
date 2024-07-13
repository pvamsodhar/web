import React, { createContext, useState } from 'eact';

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, editing: true };
      }
      return note;
    });
    setNotes(newNotes);
  };

  const updateNote = (id, updatedNote) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, ...updatedNote, editing: false };
      }
      return note;
    });
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export { NoteContext, NoteProvider };