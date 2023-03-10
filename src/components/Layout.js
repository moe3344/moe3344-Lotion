import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./Sidebar";

function Layout({notes, onNoteUpdate}) {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row">
          <div className="w-1/3">
            <SideBar notes={notes}/>
          </div>
          <div id="content" className="w-screen relative">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
