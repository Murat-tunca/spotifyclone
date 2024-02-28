import React from "react";
import NavBar from "components/NavBar";
import Home from "views/Home";
import Search from "views/Search";

import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </main>
  );
};

export default Content;
