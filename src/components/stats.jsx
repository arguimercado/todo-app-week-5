import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/todos";
import StatCard from "./stat-card";

// Count of done todos per userId, e.g. [{ userId: 1, count: 11 }, ...]
function doneCountByUser(todos) {
  const counts = {};
  todos.forEach((todo) => {
    if (todo.completed) {
      counts[todo.userId] = (counts[todo.userId] ?? 0) + 1;
    }
  });
  return Object.entries(counts).map(([userId, count]) => ({
    userId: Number(userId),
    count,
  }));
}

function Stats() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
    staleTime: 1 * 60 * 100,
  });

  if (isLoading) return <p>Loading Please wait...</p>;
  if (isError) return <p>Error</p>;

  const total = todos.length;
  const done = todos.filter((todo) => todo.completed).length;
  const open = total - done;

  const doneByUser = doneCountByUser(todos);
  const maxCount = Math.max(...doneByUser.map((row) => row.count), 1);

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Overview</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard value={total} label="Total" />
        <StatCard value={done} label="Done" />
        <StatCard value={open} label="Open" />
      </div>

      <h3 className="text-lg font-bold">Done tasks by user</h3>

      <ul className="flex flex-col gap-3">
        {doneByUser.map((row) => (
          <li key={row.userId} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm text-slate-600">
              User {row.userId}
            </span>
            <div className="flex-1">
              <div
                className="h-6 rounded border-2 border-purple-800 bg-purple-200"
                style={{ width: `${(row.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="w-6 text-sm font-bold">{row.count}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Stats;
