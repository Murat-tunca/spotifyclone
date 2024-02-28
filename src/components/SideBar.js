import React from "react";
import logo from "img/logo.svg";
import Menu from "components/SideBar/Menu";

const SideBar = () => {
  return (
    <aside className="mt-6 w-60 flex flex-col  ">
      <a href="#" className="mb-7 px-6 ">
        <img src={logo} alt="" className="h-10  " />
      </a>

      <Menu />
    </aside>
  );
};

export default SideBar;
