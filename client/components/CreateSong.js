import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const ADD_SONG_MUTATION = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

const CreateSong = () => {
  const [title, setTitle] = useState("");
  const [addSong, { data, loading, error }] = useMutation(ADD_SONG_MUTATION);
  const navigate = useNavigate();
  const addedSong = data && data.addSong.title;
  useEffect(() => {
    if (addedSong) {
      navigate("/");
    }
  }, [addedSong]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    addSong({ variables: { title } });
  };
  if (error) return <div>Error occured {error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <div>{addedSong ? `Song ${addedSong} added successfully` : ""}</div>
      <form onSubmit={onSubmitForm}>
        <label>Song Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};
export default CreateSong;

/** Query
 * mutation AddSong($title: String){
    addSong(title: $title){
      id
      title
    }
}
 */
