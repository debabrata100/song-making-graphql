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
    <div>
      {!error &&
        data.songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
    </div>
  );
};

export default SongList;
