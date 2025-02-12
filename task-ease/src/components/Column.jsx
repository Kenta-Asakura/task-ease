import Task from "./Task";

function Column({ title }) {
  return (
    <>
      <h3 className="text-base md:text-xl uppercase">{title}</h3>

      <div className="bg-gray-100 p-4">
        <Task heading="Test Title" description="Test Description" />
        <Task heading="Test Title 2" description="Test Description 2" />
      </div>
    </>
  );
}

export default Column;
