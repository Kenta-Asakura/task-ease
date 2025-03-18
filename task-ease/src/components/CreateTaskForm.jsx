function CreateTaskForm() {
  return (
    <div className="fixed z-[500] inset-0
        flex justify-center items-center
        bg-black bg-opacity-30
    ">
      <div className="editor
        flex justify-center flex-col
        mx-auto w-10/12
        bg-gray-800 border-gray-700
        text-gray-800 border p-4 shadow-lg max-w-2xl">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
        />

        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Description"
        />

        <div className="buttons flex mt-4">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer
                          text-gray-500 ml-auto transition duration-200
                          hover:bg-gray-300 hover:text-gray-900">
            Cancel
          </div>

          <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer
                          text-gray-200 ml-2 bg-indigo-500 transition duration-200
                          hover:bg-indigo-600 hover:border-indigo-600">
              Post
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskForm;
