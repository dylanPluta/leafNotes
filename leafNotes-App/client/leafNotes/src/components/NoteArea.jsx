import React from 'react'
import Note from "./Note";
import { Link } from "react-router-dom";

const NoteArea = ({notes, deleteNote}) => {
    return(
        <main>
            {notes.map((noteItem, index) => {
             return (
                <Note
                  key={index}
                  id={noteItem._id}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              )
            })}
        </main>
    )
}

export default NoteArea