function TaskCard({ heading, description, onTaskClick }) {
  return (
    <li className="list-none">
      <article
        onClick={onTaskClick}
        className="group p-4 bg-white shadow-md
                  border border-gray-200 rounded-md hover:cursor-pointer"
      >
        <h3 className="text-base font-semibold text-black group-hover:text-indigo-600">{heading}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </article>
    </li>
  )
};

export default TaskCard;
