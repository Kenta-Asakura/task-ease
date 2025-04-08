import Column from "../Column/Column";

function Board({ tasks, onTaskClick }) {
  const taskStatuses = ["Done", "Next", "Now", "New"];

  return (
    <div className="w-full overflow-x-auto p-4 md:p-6">
      <div className="flex gap-6">
        {/* <Column title="Now" tasks={tasks.filter(task => task.status === "Now")} /> */}

        {taskStatuses.map((status) => (
          <Column
            key={status}
            title={status}
            tasks={tasks.filter((task) => task.status === status)}
            // * in progress
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </div>
  )
};

export default Board;
