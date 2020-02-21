import React, { useState } from "react";

function App() {
  const [headintText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function SubmittClicked() {
    setHeadingText("Submitted");
  }
  function MouseOver() {
    setMouseOver(true);
  }
  function MouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headintText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        onClick={SubmittClicked}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
