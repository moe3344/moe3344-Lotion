import { Children } from "react";
import { createNewNote } from "../utils/localStorage";
import { useNavigate, useLocation } from "react-router-dom";
import NoteItem from "./NoteItem";

function SideBar({ notes }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNewNote = () => {
    const note = createNewNote();
    navigate(`notes/edit/${note.id}`);
  };

  if (!notes) return <div>Loading Notes...</div>;
  return (
    <div className="flex flex-col border-r border-b border-borderColor h-screen">
      <div className="flex justify-between border-b border-borderColor p-2">
        <div className="font-bold">Notes</div>
        <div onClick={handleNewNote}>
          <b className="font-bold hover:bg-borderColor hover:cursor-pointer p-2">
            +
          </b>
        </div>
      </div>
      <div className="flex flex-col">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem id={note.id} note={note} key={note.id} isSelected={location.pathname.split("/")[2] == note.id}/>
          ))
        ) : (
          <div className="text-center p-2">No Note Yet</div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
