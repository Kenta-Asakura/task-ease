function Task({ heading, description }) {
  console.log("Props received in Task:", heading, description ); // ✅ Debugging

  return (
    <li>
      <article className="bg-white shadow-md p-4 rounded-md border border-gray-200">
        <h3 className="text-base font-semibold text-black">{heading}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </article>
    </li>
  );
};

export default Task;
