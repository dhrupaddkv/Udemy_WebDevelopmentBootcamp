import React from "react";
import Card from "./Card.jsx";
import contacts from "../contact.jsx";
function createCard(contact) {
  return (
    <Card key={contact.id} name={contact.name} image={contact.imgURL} phone={contact.phone} email={contact.email} />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)};
      {/* <Card name={contacts[0].name} image={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />;
      <Card name={contacts[1].name} image={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />;
      <Card name={contacts[2].name} image={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} />; */}
    </div>
  );
}

export default App;
