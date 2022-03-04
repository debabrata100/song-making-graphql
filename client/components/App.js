import React from "react";
import { Routes, Route } from "react-router-dom";
import SongList from "./SongList";
import CreateSong from "./CreateSong";

export default () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="song/new" element={<CreateSong />} />
      </Routes>
    </div>
  );
};
