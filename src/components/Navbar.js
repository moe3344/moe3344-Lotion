function Navbar() {
  return (
    <nav className="flex justify-between items-center border-t border-b border-solid border-borderColor p-2">
      <div className="font-bold absolute ml-4">&#9776;</div>
      <div className="flex-1 text-center">
        <div className="font-extrabold text-4xl">Lotion</div>
        
        <div className="font-bold text-sm">Like Notion, but worse</div>
      </div>
    </nav>
  );
}

export default Navbar;
