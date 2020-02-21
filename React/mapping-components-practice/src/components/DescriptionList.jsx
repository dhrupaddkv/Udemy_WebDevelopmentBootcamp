import React from "react";
import DescriptionTerm from "./DescriptionTerm";
import emojipedia from "../emojipedia";

function CreateDescriptionTerm(props) {
  return <DescriptionTerm key={props.id} name={props.name} emoji={props.emoji} meaning={props.meaning} />;
}

function DescriptionList(props) {
  return <dl className="dictionary">{emojipedia.map(CreateDescriptionTerm)};</dl>;
}

export default DescriptionList;
