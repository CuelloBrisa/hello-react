import React from 'react';
import Note from './Note';

const NotesList = ({ notes, removeNote, updateNote }) => {

  return (
    <div className="card-columns">
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          initialTitle={note.title}
          initialText={note.text}
          removeNote={removeNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NotesList;