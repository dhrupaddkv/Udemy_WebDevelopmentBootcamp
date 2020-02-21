import React from "react";

function Note(props) {
  function deleteHandler() {
    props.deleteMethod(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteHandler}>DELETE</button>
    </div>
  );
}

export default Note;
