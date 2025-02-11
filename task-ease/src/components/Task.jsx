/* eslint-disable react/prop-types */

function Task({ title = 'test', description }) {
  console.log("Props received in Task:", title, description ); // ✅ Debugging

  return (
    <li>
      <article className="bg-white shadow-md p-4 rounded-md border border-gray-200">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </article>
    </li>
  );
};

export default Task;
