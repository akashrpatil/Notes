import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  TitleInput,
  BodyInput,
  Button
} from './modalCss';

const Modal = ({ currentNote, updateNote }) => {
  const [note, setNote] = useState(currentNote);
  const { title, body, id } = note;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote({
      ...note,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(id, note);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <TitleInput
          type="text"
          aria-label="Note's title input"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={handleChange}
        />
        <BodyInput
          className="modal-body"
          type="text"
          aria-label="Note's description input"
          placeholder="Create a note..."
          name="body"
          value={body}
          onChange={handleChange}
        />
        <Button
          aria-label="Save changes"
          className="save-button modal-button"
          type="button"
          onClick={handleSubmit}
        >
          <span>✓</span>
        </Button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
