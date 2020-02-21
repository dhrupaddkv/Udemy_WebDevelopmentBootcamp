import React, { useState } from "react";

function CreateArea(props) {
  // maintain states for the componenet
  const [noteItem, SetNoteItem] = useState({ nTitle: "", nContent: "" });

  //event handler for the change event for both controls
  function changeHandler(event) {
    // Javascript Destructuring asinging values to individual members from java script object
    const { name, value } = event.target;
    // set for mantaining and upating the state
    // parameter is previous state
    // seter expects a callback fucntion
    // used the arrow function
    // ... is spread operator return the array itself
    // [name] notation evaluates the actual element
    SetNoteItem(previousNote => {
      return { ...previousNote, [name]: value };
    });
  }
  return (
    <div>
      {/* inline callback function handler. event parameter to extract details of the event. props are proterties passed by the parent hosting the component. preventdefault to restrict the default behaviour of the event */}
      <form
        onSubmit={event => {
          props.onAddNote(noteItem);
          SetNoteItem({ nTitle: "", nContent: "" });
          event.preventDefault();
        }}
      >
        {/* value binding to sync the data */}
        <input name="nTitle" placeholder="Title" onChange={changeHandler} value={noteItem.nTitle} />
        <textarea
          name="nContent"
          placeholder="Take a note..."
          rows="3"
          onChange={changeHandler}
          value={noteItem.nContent}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

//export teh defult component.
export default CreateArea;
