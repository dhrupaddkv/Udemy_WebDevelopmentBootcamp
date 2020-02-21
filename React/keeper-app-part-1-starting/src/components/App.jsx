import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map(params => (
        <Note key={params.key} nTitle={params.title} nContent={params.content} />
      ))}
      <Note />
      <Footer />
    </div>
  );
}

export default App;
