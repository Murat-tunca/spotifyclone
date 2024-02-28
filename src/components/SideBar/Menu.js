import React from "react";
import { Icon } from "Icon";
const Menu = () => {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex items-center gap-x-4 text-sm font-semibold text-link hover:text-white px-4 "
          >
            <span>
              <Icon name="home" size="24" />
            </span>
            ana sayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center gap-x-4 text-sm font-semibold text-white hover:text-white px-4 bg-active"
          >
            <span>
              <Icon name="search" size="24" />
            </span>
            ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center gap-x-4 text-sm font-semibold  text-link hover:text-white px-4"
          >
            <span>
              <Icon name="collection" size="24" />
            </span>
            kitapligin
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
