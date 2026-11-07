function ErrorMessage({
  title = "Something went wrong",
  message = "We couldn't load the data. Please try again.",
  detail,
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="mx-auto flex w-full max-w-md flex-col items-center gap-4 rounded-xl border border-red-200 bg-red-50 px-6 py-10 text-center shadow-sm"
    >
      {/* icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-red-800">{title}</h2>
        <p className="text-sm text-red-700">{message}</p>
      </div>

      {detail && (
        <p className="rounded-md bg-red-100 px-3 py-1 font-mono text-xs text-red-700">
          {detail}
        </p>
      )}

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-purple-800 px-5 py-2 text-sm font-bold text-white transition hover:bg-purple-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
