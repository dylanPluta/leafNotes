import React from 'react'
import CreateArea from "./CreateArea";
import NoteArea from './NoteArea';

const Home = ({notes, addNote, deleteNote}) => {
    return(
        <main>
            <h1>Home</h1>
            <CreateArea onAdd={addNote}/>
            <NoteArea notes= {notes} deleteNote={deleteNote}/>
        </main>
    )
}

export default Home