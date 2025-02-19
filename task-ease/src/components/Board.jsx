import Column from "./Column";

function Board() {
  return (
    <div className="w-full overflow-x-auto p-4 md:p-6">
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
