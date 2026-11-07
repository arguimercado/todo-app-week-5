import TaskRow from "./task-row";

function TaskList({ todos }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-slate-600">
        Showing 5 of 200 tasks
      </p>
      <ul className="flex flex-col gap-3">
        {todos.map((todo) => (
          <TaskRow
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.completed}
            user={todo.userId}
          />
        ))}
      </ul>

      <p className="mt-4 text-xs text-slate-500">
        Click a title to open /tasks/:id
      </p>
    </div>
  );
}

export default TaskList;
