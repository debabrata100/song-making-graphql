import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import songListQuery from "../queries/songListQuery";

const SongList = (props) => {
  const { data, loading, error } = useQuery(songListQuery);
  if (loading) return <div>loading...</div>;
  return (
    <div>
      <ul className="collection">
        {!error &&
          data.songs.map((song) => {
            return (
              <li className="collection-item" key={song.id}>
                {song.title}
              </li>
            );
          })}
      </ul>
      <Link to="song/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
