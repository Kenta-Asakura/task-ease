function StatusDropdown({ currentStatus, setStatus }) {
  return (
    <select
      className="bg-transparent border border-gray-300 p-2 mb-4 outline-none text-amber-50"
      value={currentStatus}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="New">New</option>
      <option value="Now">Now</option>
      <option value="Next">Next</option>
      <option value="Done">Done</option>
    </select>
  )
};

export default StatusDropdown;
