import Task from "./Task";

function Column({ title, tasks }) {
  // test
  // console.log(tasks);

  return (
    <div className="flex flex-col gap-4 min-w-[280px]">
      <h3 className="text-base md:text-xl uppercase text-gray-300">{title}</h3>

      <div className="flex flex-col gap-6">
        {/* <Task heading="Test Title" description="Test Description" />
        <Task heading="Test Title 2" description="Test Description 2" /> */}

        {/* test */}
        {tasks.map((task) => ( // ?
          <Task
            heading={task.title}
            description={task.description}
            key={task.id} // ?
          />
        ))};
      </div>
    </div>
  );
}

export default Column;
