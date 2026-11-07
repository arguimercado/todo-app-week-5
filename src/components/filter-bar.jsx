function FilterBar({
  users,
  onUserChange,
  selectedUser,
  selectedStatus,
  onStatusChange,
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr_1fr]">
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm"
      >
        <option value="">Status: All</option>
        <option value="Open">Open</option>
        <option value="Done">Done</option>
      </select>
      <select
        value={selectedUser}
        onChange={(e) => onUserChange(Number(e.target.value))}
        className="w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm"
      >
        <option value={0}>User: All</option>
        {users.map((userId) => (
          <option key={userId} value={userId}>
            User {userId}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
