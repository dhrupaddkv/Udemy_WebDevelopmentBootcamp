import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem(event) {
    setTodoList(previousValue => {
      return [...previousValue, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
