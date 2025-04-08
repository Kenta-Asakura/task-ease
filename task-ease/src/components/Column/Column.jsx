import TaskCard from "../Task/TaskCard/TaskCard";

function Column({ title, tasks, onTaskClick }) {
  // test
  // console.log(tasks);
  // console.log(onTaskClick);

  return (
    <div className="flex flex-col gap-4 min-w-[280px]">
      <h3 className="text-base md:text-xl uppercase text-gray-300">{title} ({tasks.length})</h3>

      <div className="flex flex-col gap-6">
        {/* <Task heading="Test Title" description="Test Description" />
        <Task heading="Test Title 2" description="Test Description 2" /> */}

        {tasks.map((task) => ( // ?
          <TaskCard
            heading={task.title}
            description={task.description}
            key={task.id} // ?
            onTaskClick={onTaskClick}
          />
        ))};
      </div>
    </div>
  )
};

export default Column;
