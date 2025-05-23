import React from "react";
import foldImage from "../pages/images/folder.png";

function NotesPage({ type, x, onClick }) {
  return (
    <div
      className="inline-flex flex-col items-center m-5 text-white cursor-pointer"
      onClick={onClick}
    >
      <div>
        <img src={foldImage} alt="empty" className="w-32 h-32" />
      </div>
      <div>
        {x} - {type}
      </div>
    </div>
  );
}

export default NotesPage;
