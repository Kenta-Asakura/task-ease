import Task from "./Task";

function Column() {
  return (
    <>
      <div className="bg-gray-100 p-4"></div>

      <Task
        title="Test Title"
        description="Test Description"
      />
    </>
  )
};

export default Column;
