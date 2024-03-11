import React from "react";
import { Icon } from "Icon";
import { useNavigate } from "react-router-dom";
import Auth from "./Navbar/Auth.js";

const Navigation = () => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate("/search");
  };

  const goToNextPage = () => {
    navigate("/collection");
  };

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <button
        onClick={goToPreviousPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="prev" />
      </button>
      <button
        onClick={goToNextPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="next" />
      </button>
      <Auth />
    </nav>
  );
};

export default Navigation;
