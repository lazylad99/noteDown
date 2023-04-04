import React, { useContext, useState, useMemo } from "react";
import noteContext from "../Context/notes/noteContext";

export default function AddNotes(props) {
  const context = useContext(noteContext);
  const addNote = useMemo(() => context.addNote, [context.addNote]);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("New Note Added Successfully", "success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center">
        <span className="logo3 material-symbols-outlined mx-1">add_box</span>
          <h2 className="mt-2">Add a Note</h2>
        </div>
        <form className="mt-3 mb-3" onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Enter Title"
              value={note.title}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Select Tag
            </label>

            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="OR enter a new tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              value={note.description}
              placeholder="Write your text here..."
              onChange={onChange}
              minLength={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-success"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
