import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ShowNote from "./components/ShowNote";
import EditNote from "./components/EditNote";
import { useState, useEffect, Redirect } from "react";
import { getAllNotes } from "./utils/localStorage";
function App() {
  const [notes, setNotes] = useState();

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const handleNoteUpdate = () => {
    setNotes(getAllNotes);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout notes={notes} onNoteUpdate={handleNoteUpdate} />}>
          <Route path="/:noteId?" element={<Navigate replace to="/notes" />} />
          <Route path="notes/:noteId?" element={<ShowNote onNoteUpdate={handleNoteUpdate} />} />
          <Route
            path="notes/edit/:noteId"
            element={<EditNote onNoteUpdate={handleNoteUpdate} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
