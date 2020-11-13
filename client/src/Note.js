import React, { useState } from 'react';

const Note= ({ id, initialTitle, initialText, removeNote, updateNote}) => {

    const [title, setTitle] = useState(initialTitle);
    const [text, setText] = useState(initialText);
    const [editable, setEditable] = useState(false);

    const handleSave = () => {
        updateNote(id, title, text);
        setEditable(!editable);
    };

    const inputStyle = {
        backgroudColor: 'transparent',
        border: 'none',
        fontSize: 1.25 +'rem',
        marginBottom: 0.75 +'rem'
    };
    const textareaStyle = {
        backgroudColor: 'transparent',
        border: 'none'
    };

    return (
        <div className="card">
            <div className="card-body">

                <input
                  style={inputStyle}
                  spellCheck={false}
                  disabled={!editable}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  rows={5}
                  style={textareaStyle}
                  spellCheck={false}
                  disabled={!editable}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                >
                </textarea>
                <br />

                <button className="btn" hidden={editable} onClick={() => setEditable(!editable)}>
                     <i className="text-primary fa fa-pencil fa-lg"></i>
                </button>

                <button className="btn" hidden={!editable} onClick={handleSave}>
                     <i className="text-secondary fa fa-save fa-lg"></i>
                 </button>

                <button className="btn" onClick={() => removeNote(id)}>
                     <i className="text-danger fa fa-trash fa-lg"></i>
                </button>

            </div>
        </div>
    );

};
export default Note;