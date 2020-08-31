import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Modal from './components/Modal';
import { initialNotes } from './utils/initialNotes';
import { Header, Main } from './appCss';

const LOCAL_STORAGE_KEY = 'storage-myNotes';

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    title: '',
    body: '',
    id: ''
  });

  useEffect(() => {
    const storageNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageNotes) {
      setNotes(storageNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    const { title, body, id } = note;

    setEditing(true);
    setCurrentNote({
      title: title,
      body: body,
      id: id
    });
  };

  const updateNote = (id, updatedNote) => {
    setEditing(false);
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  return (
    <>
      <Header>
        <Title title="myNotes" />
      </Header>
      <Main>
        {editing ? (
          <Modal currentNote={currentNote} updateNote={updateNote} />
        ) : null}
        <Form addNewNote={addNewNote} />
        <List notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </Main>
    </>
  );
}

export default App;
