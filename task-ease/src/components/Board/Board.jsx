import Column from "../Column/Column";

function Board({ tasks }) {
  return (
    <div className="w-full overflow-x-auto p-4 md:p-6">
      <div className="flex gap-6">
        {/* <Column title="Done" />
        <Column title="Next" />
        <Column title="Now" />
        <Column title="New" /> */}

        {/* pass the tasks props */}
        <Column title="Done" tasks={tasks.filter(task => task.status === "Done")} />
        <Column title="Next" tasks={tasks.filter(task => task.status === "Next")} />
        <Column title="Now" tasks={tasks.filter(task => task.status === "Now")} />
        <Column title="New" tasks={tasks.filter(task => task.status === "New")} />
      </div>
    </div>
  )
};

export default Board;
