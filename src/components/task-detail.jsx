import { Link } from "react-router-dom";

function TaskDetail() {
  return (
    <section className="flex max-w-xl flex-col gap-4">
      <Link to="/" className="text-sm font-bold text-purple-800 hover:underline">
        &lt; Back to tasks
      </Link>

      <h2 className="text-2xl font-bold">quis ut nam facilis et officia qui</h2>

      <span className="w-fit rounded border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-700">
        Open
      </span>

      <hr className="border-purple-200" />

      <div>
        <p className="text-xs font-semibold text-slate-500">Assigned to</p>
        <p className="text-lg font-bold">Leanne Graham</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500">Task number</p>
        <p className="text-lg font-bold">2</p>
      </div>

      <button
        type="button"
        className="w-full rounded-md border-2 border-purple-800 bg-white px-4 py-3 text-left text-sm font-bold text-purple-800 sm:w-72"
      >
        Mark done (this device only)
      </button>
    </section>
  );
}

export default TaskDetail;
