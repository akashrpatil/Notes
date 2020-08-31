import React from 'react';
import './note.css';
import { NoteElement, ButtonsContainer, NoteButton, Title } from './noteCss';

const Note = ({ note, deleteNote, editNote }) => {
  const { title, body, id } = note;

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    editNote(note);
  };

  return (
    <NoteElement id={id} className="note">
      <div>
        <Title className="title">{title}</Title>
        <p>{body}</p>
        <ButtonsContainer className="buttons">
          <NoteButton
            aria-label="Edit Note Button"
            className="edit-button"
            role="button"
            onClick={handleEdit}
          ></NoteButton>
          <NoteButton
            aria-label="Delete Note Button"
            className="delete-button"
            role="button"
            onClick={handleDelete}
          ></NoteButton>
        </ButtonsContainer>
      </div>
    </NoteElement>
  );
};

export default Note;
