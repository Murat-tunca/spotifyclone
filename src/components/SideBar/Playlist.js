import React from "react";

const Playlist = () => {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {new Array(20).fill(
          <li>
            <a
              href="#"
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              20.Calma listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Playlist;
