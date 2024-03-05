import React from "react";
import NavBar from "components/NavBar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex-auto">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </main>
  );
};

export default Content;
