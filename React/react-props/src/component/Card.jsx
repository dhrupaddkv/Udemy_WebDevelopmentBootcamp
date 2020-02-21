import React from "react";
import Avatar from "./avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.image} />
      </div>
      <div className="bottom">
        <Details info={props.phone} />
        <Details info={props.email} />
      </div>
    </div>
  );
}

export default Card;
