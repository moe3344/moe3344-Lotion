import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editNote, saveNote, deleteNote } from "../utils/localStorage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditNote({ onNoteUpdate }) {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const newNote = editNote(noteId);
    setNote(newNote);
    setTitle(newNote.title);
    setDate(newNote.date);
    setDescription(newNote.description);
  }, [noteId]);

  const handleSave = () => {
    saveNote({
      id: noteId,
      title: title,
      date: date,
      description: description,
    });

    onNoteUpdate();

    navigate(`/notes/${noteId}`);
  };

  const handleDelete = () => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      let topNoteId = deleteNote(noteId);
      
      onNoteUpdate();

      if (topNoteId) {
        navigate(`/notes/${topNoteId}`);
      }
      navigate(`/notes`);
    }
  };

  if (!note) return <div>Loading Note...</div>;
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col flex-1">
          <input
          className="text-2xl font-bold w-full bg-bgColor p-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
          className="w-1/2 font-bold bg-bgColor p-2"
            type={"datetime-local"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-4 m-2 items-center font-bold">
          <span onClick={handleSave} className="hover:bg-borderColor hover:cursor-pointer p-4">Save</span>
          <span onClick={handleDelete} className="hover:bg-borderColor hover:cursor-pointer p-4">Delete</span>
        </div>
      </div>
      <div className="text-area">
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Your Note Here"
        />
      </div>
    </div>
  );
}

export default EditNote;
