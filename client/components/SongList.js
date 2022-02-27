import React from "react";
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
    </ul>
  );
};

export default SongList;
