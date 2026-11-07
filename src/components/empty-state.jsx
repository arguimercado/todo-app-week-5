function EmptyState({
  title = "Nothing here yet",
  message,
  actionLabel,
  onAction,
  compact = false,
}) {
  return (
    <div
      role="status"
      className={`mx-auto flex w-full max-w-md flex-col items-center gap-3 rounded-xl border-2 border-dashed border-purple-200 bg-white text-center ${
        compact ? "px-4 py-6" : "px-6 py-12"
      }`}
    >
      {/* icon: empty tray */}
      <div
        className={`flex items-center justify-center rounded-full bg-purple-100 text-purple-700 ${
          compact ? "h-10 w-10" : "h-14 w-14"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={compact ? "h-5 w-5" : "h-7 w-7"}
          aria-hidden="true"
        >
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`font-bold text-slate-800 ${compact ? "text-base" : "text-lg"}`}>
          {title}
        </h3>
        {message && <p className="text-sm text-slate-500">{message}</p>}
      </div>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-1 rounded-md border-2 border-purple-800 bg-white px-5 py-2 text-sm font-bold text-purple-800 transition hover:bg-purple-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
