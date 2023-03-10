import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { formatDate } from "../utils/localStorage";
import { useState, useEffect } from "react";
function NoteItem({ note, isSelected }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const handleShowNoteClick = (id) => {
    Navigate();
  };

  useEffect(() => {
    let noteId = location.pathname.split("/")[2];
    if (noteId == note.id) setIsActive(true);
  }, []);

  return (
    <>
      <div
        className={`note-item p-2 border-b border-borderColor h-24 hover:bg-borderColor hover:cursor-pointer
        ${isSelected ? "bg-borderColor" : ""}`}
        key={note.id}
        onClick={() => {
          navigate(`notes/${note.id}`);
        }}
      >
        <div className="title font-bold">{note.title}</div>
        <div className="date text-xs">{formatDate(note.date)}</div>
        <div className="description text-xs font-bold mt-2">
          <div
            dangerouslySetInnerHTML={{
              __html:
                note.description.length > 96
                  ? note.description.slice(0, 96) + "..."
                  : note.description,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NoteItem;
