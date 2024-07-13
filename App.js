import React, { useState, useEffect } from 'eact';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'eactstrap';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import ToggleSwitch from './ToggleSwitch';
import { useTheme } from './context/ThemeContext';
import { useNotes } from './context/NoteContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { notes, addNote, editNote, deleteNote } = useNotes();
  const { theme } = useTheme();

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      addNote(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container fluid className={darkMode? 'dark-mode' : ''}>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <ToggleSwitch darkMode={darkMode} handleToggle={handleToggle} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <NoteForm addNote={addNote} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;