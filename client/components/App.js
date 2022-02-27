import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongList from "./SongList";

export default () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SongList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
