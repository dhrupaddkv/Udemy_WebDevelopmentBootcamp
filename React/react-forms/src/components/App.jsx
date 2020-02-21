import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function changed(event) {
    setName(event.target.value);
  }
  function buttonCLicked(event) {
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={buttonCLicked}>
        <input onChange={changed} type="text" placeholder="What's your name?" value={name} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
