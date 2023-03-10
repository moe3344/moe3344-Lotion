import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNoteWithId, deleteNote } from "../utils/localStorage";

function ShowNote({ onNoteUpdate }) {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const newNote = getNoteWithId(noteId);
    setNote(newNote);
    setTitle(newNote.title);
    setDate(newNote.date);
    setDescription(newNote.description);
  }, [noteId]);

  const handleOnEditClick = () => {
    navigate(`/notes/edit/${noteId}`);
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
  
  if (!note)
    return (
      <div className="absolute inset-0 font-bold" style={{ marginTop: "50vh", marginLeft: "50vh" }}>
        Select a Note or Create a new one
      </div>
    );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between  border-b border-borderColor flex-1 p-2">
        <div className="flex flex-col  ">
          <span className="text-2xl font-bold w-full bg-bgColor"> {title}</span>
          <span className="font-bold text-xs bg-bgColor mt-2"> {date}</span>
        </div>
        <div className="flex flex-row gap-4 m-2 items-center font-bold">
          <span
            onClick={handleOnEditClick}
            className="hover:bg-borderColor hover:cursor-pointer p-4"
          >
            Edit
          </span>
          <span
            onClick={handleDelete}
            className="hover:bg-borderColor hover:cursor-pointer p-4"
          >
            Delete
          </span>
        </div>
      </div>
      <div className="text-area mt-5 p-2">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default ShowNote;
