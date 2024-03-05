import React from "react";
import { Icon } from "Icon";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            activeClassname="bg-active text-white"
            to={"/"}
            className="h-10 flex items-center gap-x-4 text-sm font-semibold text-link rounded hover:text-white px-4 "
          >
            <span>
              <Icon name="home" size="24" />
            </span>
            Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassname="bg-active text-white"
            to={"/search"}
            className="h-10 flex items-center gap-x-4 text-sm font-semibold text-white hover:text-white px-4 "
          >
            <span>
              <Icon name="search" size="24" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassname="bg-active text-white"
            to={"/collection"}
            className="h-10 flex items-center gap-x-4 text-sm font-semibold  text-link hover:text-white px-4"
          >
            <span>
              <Icon name="collection" size="24" />
            </span>
            Kitapligin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
