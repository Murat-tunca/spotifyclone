import React from "react";
import NavBar from "components/NavBar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-auto overflow-auto">
      <NavBar />
      <div className="px-8 py-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
