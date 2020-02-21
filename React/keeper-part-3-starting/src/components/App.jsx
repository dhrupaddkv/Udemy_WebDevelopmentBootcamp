import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // useState with square barcket implies that it will store a array of items. on ewith {} indicate it will be an object. else it would be a single native object
  const [noteItems, setNoteItem] = useState([]);
  function addNote(newNote) {
    // setter needs to return to set the values correctly
    setNoteItem(prevItems => {
      return [...prevItems, newNote];
    });
  }
  function deleteNote(deleteIndex) {
    //setter needs tore turn the new array to reflect the change
    setNoteItem(prevItems => {
      // filter first param is the item to iterate, index of the element
      return noteItems.filter((item, index) => {
        return deleteIndex !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      {noteItems.map((noteItem, index) => (
        <Note title={noteItem.nTitle} content={noteItem.nContent} key={index} id={index} deleteMethod={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
