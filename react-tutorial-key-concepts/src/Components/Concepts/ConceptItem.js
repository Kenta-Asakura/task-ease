import React from "react";
import Card from "../UI/Card";

const ConceptItem = (props) => {
  return (
    <Card className="concept">
      <img src={props.image} alt="TODO: TITLE" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Card>
  );
};

export default ConceptItem;
