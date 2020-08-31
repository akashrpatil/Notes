import React, { useState } from 'react';
import Error from '../Error';
import uuid from 'uuid/v4';
import {
  FormContainer,
  FormElement,
  NoteTitle,
  NoteBody,
  Button
} from './formCss';

const Form = ({ addNewNote }) => {
  const [note, setNote] = useState({
    title: '',
    body: '',
    id: ''
  });
  const { title, body } = note;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote({
      ...note,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !body) {
      setError(true);
      return;
    }
    setError(false);
    note.id = uuid();
    addNewNote(note);

    setNote({
      title: '',
      body: '',
      id: ''
    });
  };

  return (
    <FormContainer>
      {error ? <Error message="You must complete at least one field" /> : null}
      <FormElement onSubmit={handleSubmit}>
        <NoteTitle
          type="text"
          aria-label="Note's title input"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={handleChange}
        />

        <NoteBody
          type="text"
          aria-label="Note's body input"
          placeholder="Create a note..."
          name="body"
          value={body}
          onChange={handleChange}
        />

        <Button type="submit" aria-label="Add note button">
          <span>+</span>
        </Button>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
