import React from 'react';
import Note from '../Note';
import { XMasonry, XBlock } from 'react-xmasonry';
import './list.css';

const List = ({ notes, deleteNote, editNote }) => {
  return (
    <XMasonry>
      {notes.length
        ? notes.map((note) => (
            <XBlock key={note.id}>
              <Note note={note} deleteNote={deleteNote} editNote={editNote} />
            </XBlock>
          ))
        : null}
    </XMasonry>
  );
};

export default List;
