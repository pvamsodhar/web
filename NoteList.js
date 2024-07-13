import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function NoteList({ notes, deleteNote }) {
  return (
    <ListGroup>
      {notes.map((note) => (
        <ListGroupItem key={note.id}>
          <h5>{note.title}</h5>
          <p>{note.content}</p>
          <Button variant="danger" onClick={() => deleteNote(note.id)}>Delete</Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default NoteList;