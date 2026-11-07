import { Link } from "react-router-dom";

// Layout only: props are placeholders for you to wire up.
function TaskRow({ id = 1, title = "Task title", user = "User name", done = false }) {
  return (
    <li className="flex flex-wrap items-center gap-3 rounded-md border border-purple-200 bg-white px-4 py-3 sm:flex-nowrap">
      <input
        type="checkbox"
        defaultChecked={done}
        className="h-5 w-5 shrink-0 accent-purple-800"
      />
      <Link
        to={`/tasks/${id}`}
        className={`min-w-0 flex-1 basis-full font-semibold sm:basis-auto ${
          done ? "text-slate-400" : "text-slate-800"
        }`}
      >
        {title}
      </Link>
      <span className="rounded-full border border-purple-300 bg-purple-100 px-3 py-0.5 text-xs font-medium text-purple-800">
        {user}
      </span>
      <span
        className={`w-16 rounded border px-2 py-0.5 text-center text-xs font-bold ${
          done
            ? "border-teal-300 bg-teal-50 text-teal-700"
            : "border-amber-300 bg-amber-50 text-amber-700"
        }`}
      >
        {done ? "Done" : "Open"}
      </span>
    </li>
  );
}

export default TaskRow;
