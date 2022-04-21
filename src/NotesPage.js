import React from "react";
import AddNoteForm from "./components/AddNoteForm";
import NoteList from "./components/NoteList";
import "./styles.css"

function Notes() {
  return (
        <div className="Notes">
            <NoteList/>
            <AddNoteForm/>
        </div>
  );
}

export default Notes;
