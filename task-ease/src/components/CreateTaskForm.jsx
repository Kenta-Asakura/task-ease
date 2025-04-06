import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "./ui/Modal/Modal";

function CreateTaskForm({ setTasks, setShowForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("New");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title,
      description,
      status
    };

    setTasks((prevTasks) => [...prevTasks, newTask]); // add new task to state

    // reset input fields
    setTitle("");
    setDescription("");
    setStatus("New");

    // hide form
    setShowForm(false);
  };

  return (
    <Modal id="form-overlay" onClose={() => setShowForm(false)} >
      <form onSubmit={handleSubmit} className="flex items-center basis-6/12">

        <div className="editor
            flex basis-full justify-center flex-col gap-y-4 p-4
            bg-gray-800 border-gray-700
            border shadow-lg text-gray-800"
        >
          <input
            className="title bg-gray-100 border border-gray-300 p-2 outline-none"
            spellCheck="false"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <select className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="New">New</option>
            <option value="Now">Now</option>
            <option value="Next">Next</option>
            <option value="Done">Done</option>
          </select>

          <div className="buttons flex mt-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer
                            text-gray-500 ml-auto transition duration-200
                            hover:bg-gray-300 hover:text-gray-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer
                            text-gray-200 ml-2 bg-indigo-500 transition duration-200
                            hover:bg-indigo-600 hover:border-indigo-600"
            >
              Post
            </button>
          </div>
        </div>

      </form>
    </Modal>
  )
};

export default CreateTaskForm;
