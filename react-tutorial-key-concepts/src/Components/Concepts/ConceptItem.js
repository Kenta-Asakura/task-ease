import React from "react";
import Card from "../UI/Card";

const ConceptItem = (props) => {
  return (
      <ul id="concepts">
        <Card className="concept">
          <img src={props.image} alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </Card>
      </ul>
  );
};

export default ConceptItem;
