import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "./../../store/actions";
import "../../styles.css"
import { makeStyles } from "@material-ui/core";
import ButtonContained from "../ButtonContained"

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    margin: "20px 0",
    minWidth: "200px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}))

function AddNoteForm(props) {
  const classes = useStyles()
  const [form, setForm] = useState({
    title: "",
    text: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let newForm = { ...form };
    newForm[name] = value;
    setForm(newForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!form.title){
      alert("Add title")
      return
    }
    props.addNote(form);
    setForm({ title: "", text: "" });
  }

  return (
    <div className="app-main">
    <div className="app-main-note-edit">
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        autoFocus
      />
      <textarea
        id="body"
        name="text"
        placeholder="Write your note here..."
        value={form.text}
        onChange={handleChange}
      />
    </div>
    <div className="add-btn">
      <ButtonContained
          text={"Add Note"}
          className={classes.button}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addNote: payload => {
      console.log(payload);
      dispatch(addNote(payload));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddNoteForm);
