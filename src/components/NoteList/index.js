import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles.css";
import { removeNote } from "../../store/actions";
import DeleteIcon from "@material-ui/icons/Delete";

function NoteList(props) {
  const navigate = useNavigate();
    React.useEffect(() => {
      if (!props.auth.isLoggedIn) {
        navigate("/");
      }
    });
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>
          <span className="highlight">Notes</span>
        </h1>
      </div>

      <div className="app-sidebar-notes">
        {props.notes.map((note) => (
          <div className={`app-sidebar-note`}>
            <DeleteIcon
              className="sidebar-note-delete"
              onClick={() => props.remove(note.id)}
            />
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
            </div>
            <p>{note.text && note.text.substr(0, 100) + "..."}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => dispatch(removeNote(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
