import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique IDs

function CreateTaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("New");

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
    setStatus("New");
  };

  return (
    <form
      className="fixed z-[500] inset-0
        flex justify-center items-center
        bg-black bg-opacity-30"
      onSubmit={handleSubmit}
    >

      <div
        className="editor
        flex justify-center flex-col gap-y-4
        mx-auto w-6/12
        bg-gray-800 border-gray-700
        text-gray-800 border p-4 shadow-lg max-w-2xl"
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="New">New</option>
          <option value="Now">Now</option>
          <option value="Next">Next</option>
          <option value="Done">Done</option>
        </select>

        <div className="buttons flex mt-4">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer
                          text-gray-500 ml-auto transition duration-200
                          hover:bg-gray-300 hover:text-gray-900"
          >
            Cancel
          </div>

          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer
                          text-gray-200 ml-2 bg-indigo-500 transition duration-200
                          hover:bg-indigo-600 hover:border-indigo-600"
            type="submit"
          >
            Post
          </button>
        </div>
      </div>

    </form>
  );
}

export default CreateTaskForm;
