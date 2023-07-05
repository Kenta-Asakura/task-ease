import React from "react";
import ConceptItem from "./ConceptItem";

const Concepts = ({ items }) => {
  return (
    // <ConceptItem
    //   image={items[0].image}
    //   title={items[0].title}
    //   description={items[0].description}
    // />
    <div>
      {items.map((item) => (
        <ConceptItem
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      ;
    </div>
  );
};

export default Concepts;
