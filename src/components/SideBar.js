import React from "react";
import logo from "img/logo.svg";
import Menu from "components/SideBar/Menu";
import { Icon } from "Icon";
import Playlist from "components/SideBar/Playlist";
import Downloadapp from "./SideBar/Downloadapp";

const SideBar = () => {
  return (
    <aside className="mt-6 w-60 flex flex-shrink-0 flex-col bg-black ">
      <a href="#" className="mb-7 px-6 ">
        <img src={logo} alt="" className="h-10  " />
      </a>

      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name="heartFilled" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlist />
      <Downloadapp />
    </aside>
  );
};

export default SideBar;
