import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, SetTime] = useState(now);

  function updateTime() {
    SetTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
