function StatusDropdown({ currentStatus, setStatus }) {
  return (
    <select
      className="bg-transparent border border-gray-300 p-2 mb-4 outline-none text-amber-50"
      value={currentStatus}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option className="bg-gray-800" value="New">New</option>
      <option className="bg-gray-800" value="Now">Now</option>
      <option className="bg-gray-800" value="Next">Next</option>
      <option className="bg-gray-800" value="Done">Done</option>
    </select>
  )
};

export default StatusDropdown;
