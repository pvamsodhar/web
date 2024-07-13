import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'react-bootstrap';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote({ title, content, id: Math.random().toString(36).substr(2, 9) });
      setTitle('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="textarea"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </FormGroup>
      <Button variant="primary" type="submit">Add Note</Button>
    </Form>
  );
}

export default NoteForm;