import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique IDs

function CreateTaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  // test
  // console.log(typeof title);
  // console.log('title - ', title);
  // console.log(typeof description);
  // console.log('description - ', description);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(), // generate a unique ID
      title,
      description,
      status
    };

    setTasks((prevTasks) => [...prevTasks, newTask]); // add new task to state

    // reset input fields
    setTitle("");
    setDescription("");
  };

  return (
    <div
      className="fixed z-[500] inset-0
        flex justify-center items-center
        bg-black bg-opacity-30"
    >

      <form
        className="editor
        flex justify-center flex-col gap-y-4
        mx-auto w-6/12
        bg-gray-800 border-gray-700
        text-gray-800 border p-4 shadow-lg max-w-2xl"
        onSubmit={handleSubmit}
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="status bg-gray-100 border border-gray-300 p-2 outline-none"
          spellCheck="false"
          placeholder="Status"
          type="text"
          onChange={(e) => setStatus(e.target.value)}
        />

        <div className="buttons flex mt-4">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer
                          text-gray-500 ml-auto transition duration-200
                          hover:bg-gray-300 hover:text-gray-900"
          >
            Cancel
          </div>

          <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer
                          text-gray-200 ml-2 bg-indigo-500 transition duration-200
                          hover:bg-indigo-600 hover:border-indigo-600"
          >
            Post
          </div>
        </div>
      </form>

    </div>
  );
}

export default CreateTaskForm;
