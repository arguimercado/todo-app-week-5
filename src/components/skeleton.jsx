// Base block: pulsing purple-tinted placeholder. Size it with className.
export function Skeleton({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded bg-purple-200/70 ${className}`}
    />
  );
}

// Mirrors the Tasks page: filter bar, "Showing..." line, task rows.
export function DashboardSkeleton({ rows = 6 }) {
  return (
    <section
      role="status"
      aria-busy="true"
      className="flex flex-col gap-5"
    >
      <span className="sr-only">Loading tasks...</span>

      {/* filter bar */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr_1fr]">
        <Skeleton className="h-10 rounded-md" />
        <Skeleton className="h-10 rounded-md" />
      </div>

      {/* "Showing X of Y tasks" */}
      <Skeleton className="h-4 w-40" />

      {/* task rows */}
      <ul className="flex flex-col gap-3">
        {Array.from({ length: rows }).map((_, i) => (
          <li
            key={i}
            className="flex flex-wrap items-center gap-3 rounded-md border border-purple-200 bg-white px-4 py-3 sm:flex-nowrap"
          >
            <Skeleton className="h-5 w-5 shrink-0" />
            <Skeleton className="h-5 flex-1 basis-full sm:basis-auto" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-16" />
          </li>
        ))}
      </ul>
    </section>
  );
}

const barWidths = ["w-[90%]", "w-[65%]", "w-full", "w-[50%]", "w-[75%]"];

// Mirrors the Stats page: heading, three cards, heading, bar rows.
export function StatsSkeleton({ rows = 5 }) {
  return (
    <section
      role="status"
      aria-busy="true"
      className="flex flex-col gap-6"
    >
      <span className="sr-only">Loading stats...</span>

      <Skeleton className="h-7 w-32" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 rounded-md border border-purple-200 bg-white px-4 py-5"
          >
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        ))}
      </div>

      <Skeleton className="h-6 w-48" />

      <ul className="flex flex-col gap-3">
        {Array.from({ length: rows }).map((_, i) => (
          <li key={i} className="flex items-center gap-3">
            <Skeleton className="h-4 w-24 shrink-0" />
            <div className="flex-1">
              <Skeleton className={`h-6 ${barWidths[i % barWidths.length]}`} />
            </div>
            <Skeleton className="h-4 w-6" />
          </li>
        ))}
      </ul>
    </section>
  );
}
