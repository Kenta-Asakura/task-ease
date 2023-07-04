import React from "react";

const ConceptItem = (props) => {
  return (
    <ul id="concepts">
      <li className="concept">
        <img src={props.image} alt="TODO: TITLE" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    </ul>
  );
};

export default ConceptItem;
