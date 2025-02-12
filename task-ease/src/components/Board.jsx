import Column from "./Column";

function Board() {
  return (
    <div className="flex">
      <Column
        title="Done"
      />

      <Column
        title="Next"
      />

      <Column
        title="Now"
      />
    </div>
  )
};

export default Board;
