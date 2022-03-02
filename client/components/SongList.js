import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
const SongList = (props) => {
  const { data, loading, error } = useQuery(query);
  if (loading) return <div>loading...</div>;
  return (
    <ul className="collection">
      {!error &&
        data.songs.map((song) => {
          return (
            <li className="collection-item" key={song.id}>
              {song.title}
            </li>
          );
        })}
      <Link to="song/new">Create</Link>
    </ul>
  );
};

export default SongList;
