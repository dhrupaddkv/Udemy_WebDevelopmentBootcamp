import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.nTitle}</h1>
      <p>{props.nContent}</p>
    </div>
  );
}

export default Note;
