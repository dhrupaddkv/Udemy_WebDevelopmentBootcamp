import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    console.log(event.target);

    const { name, value } = event.target;
    setContact(previousValue => {
      if (name === "fName") {
        return { fName: value, lName: previousValue.lName, email: previousValue.email };
      } else if (name === "lName") {
        return { fName: previousValue.fName, lName: value, email: previousValue.email };
      } else if (name === "email") {
        return { fName: previousValue.fName, lName: previousValue.lName, email: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={contact.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={handleChange} name="email" placeholder="Email" value={contact.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
