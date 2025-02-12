import Column from "./Column";

function Board() {
  return (
    <div className="w-full overflow-x-auto px-4 md:px-6">
      <div className="flex gap-6">
        <Column title="Done" />

        <Column title="Next" />

        <Column title="Now" />

        <Column title="New" />
      </div>
    </div>
  );
}

export default Board;
