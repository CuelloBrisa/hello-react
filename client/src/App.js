import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import Footer from './Footer';

const App = () => {

  const [notes, setNotes ] = useState([]);

  useEffect(() => {
    axios.get('/api/notes')
      .then(res => {
        setNotes(res.data.notes);
      });
  }, []);

  //crear nota
  const addNote = (note) => {
    axios.post('/api/notes', note)
      .then(res => {
        const newNotes = [res.data, ...notes];
        setNotes(newNotes);
      });
  };

  //modificar nota
  const updateNote = (id, title, text) => {
    console.log('esta funcion que esta en App');
    console.log('recibi los siguientes argumentos');
    console.log(id, title, text);
    const updateNote = {
      title: title,
      text: text
    };
    // guardar en la base de datos
    axios.put(`/api/notes/${id}`, updateNote)
      .then(res => {
        console.log(res.data);
        // modificar el estado de la app (el array de notas)
        const newNotes = notes.map(note => note._id === id ? updateNote : note);
        console.log('Array viejo:', notes);
        console.log('Array nuevo:', newNotes);
        setNotes(newNotes);
      });

  };

  //borrar nota
  const removeNote = (id) => {
    axios.delete('/api/notes/' + id)
      .then(res => {
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
      });
  };

  return (
    <div>
      <Header title='App de Notas'/>
      <div className="container mt-3">
        <NoteForm
         addNote={addNote} 
        />
        <hr />
        <NotesList 
          notes={notes}
          removeNote={removeNote}
          updateNote={updateNote}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
