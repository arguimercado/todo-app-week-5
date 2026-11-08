
# Week 5 Mini Project
## Arnold G. Mercado

A small task manager built with React. It loads a list of todos from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, lets you filter them, and shows summary statistics.

## Features

- **Tasks (`/`)**: list of todos, each with its assigned user and an Open/Done badge. Filter by **status** (All / Open / Done) and by **user**. Both filters can be combined.
- **Stats (`/stats`)**: total, done and open counts, plus a bar chart of done tasks per user. All numbers are computed from the same todos data.
- **Task detail (`/tasks/:id`)** and **About (`/about`)**: pages and routes exist, but they are layout only for now (placeholder content).
- **Loading, error and empty states:** skeleton placeholders while loading, an error card with a "Try again" button, and an empty message (with "Clear filters") when nothing matches.
- Responsive layout with Tailwind CSS (filters and cards stack on small screens).

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [React Router](https://reactrouter.com/) 7
- [TanStack Query](https://tanstack.com/query) 5 for data fetching and caching
- [Tailwind CSS](https://tailwindcss.com/) 4

## Requirements

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** (comes with Node)

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/arguimercado/todo-app-week-5.git
cd todo-app-week-5

# 2. Install dependencies
npm install
```

## Configuration

The app reads the todos endpoint from an environment variable. Create a file named `.env.local` in the project root (next to `package.json`):

```dotenv
VITE_API_URL=https://jsonplaceholder.typicode.com/todos
```

Notes:

- The variable name **must start with `VITE_`**, or Vite will not expose it to the browser code.
- Restart the dev server after changing the file. Vite only reads it at startup.
- If `VITE_API_URL` is not set, the app falls back to `https://jsonplaceholder.typicode.com/todos`.
- `.env.local` is ignored by git.

## Running the app

```bash
npm run dev
```

Then open the URL printed in the terminal (usually <http://localhost:5173>).

## Other scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload  |
| `npm run build`   | Create a production build in `dist/`          |
| `npm run preview` | Serve the production build locally to check it |

## Project structure

```
src/
├── api/
│   └── todos.js          # getData(): fetches the todos list
├── components/
│   ├── app-header.jsx    # Title and navigation
│   ├── dashboard.jsx     # Tasks page: query + filter state
│   ├── filter-bar.jsx    # Status and user selects
│   ├── task-list.jsx     # List of tasks
│   ├── task-row.jsx      # One task row
│   ├── task-detail.jsx   # /tasks/:id page (layout only)
│   ├── stats.jsx         # Stats page: totals and done-by-user bars
│   ├── stat-card.jsx     # Single number card
│   ├── skeleton.jsx      # Loading placeholders for Tasks and Stats
│   ├── error-message.jsx # Error card with a "Try again" button
│   ├── empty-state.jsx   # Message shown when there is nothing to list
│   └── about.jsx         # About page (placeholder)
├── App.jsx               # Routes
├── main.jsx              # Entry: Router and QueryClientProvider
└── index.css             # Tailwind import
```

## How the libraries are used

### Tailwind CSS

All styling is done with Tailwind utility classes directly in the JSX. There are no custom CSS files.

- **Setup:** the `@tailwindcss/vite` plugin is registered in `vite.config.js`, and `src/index.css` contains a single line, `@import "tailwindcss";`.
- **Responsive layout:** the `sm:` prefix switches layouts from one column on mobile to several columns on larger screens. Examples are the filter bar (`grid-cols-1 sm:grid-cols-[2fr_1fr_1fr]`), the stat cards (`grid-cols-1 sm:grid-cols-3`) and the header (`flex-col sm:flex-row`).
- **State-based styles:** `hover:`, `focus-visible:` and conditional classes built in JSX. For example, `task-row.jsx` picks teal classes for Done and amber for Open, and `app-header.jsx` underlines the active link.
- **Animation:** `animate-pulse` powers the skeleton placeholders in `skeleton.jsx`.
- **Dynamic values:** the bar widths on the Stats page use an inline `style`, because Tailwind cannot generate classes for values only known at runtime.

### React Router (`react-router-dom`)

- **`BrowserRouter`** in `main.jsx` wraps the whole app so routing works.
- **`Routes` and `Route`** in `App.jsx` map the paths to pages: `/` (Dashboard), `/tasks/:id` (TaskDetail), `/stats` (Stats) and `/about` (About).
- **`NavLink`** in `app-header.jsx` renders the navigation. Its `className` callback receives `isActive`, which is used to highlight the current page. The `end` prop on the Tasks link stops it from staying active on every route.
- **`Link`** in `task-row.jsx` opens `/tasks/:id` from a task title, and in `task-detail.jsx` it goes back to the list. `Link` navigates without reloading the page.

### TanStack Query (`@tanstack/react-query`)

- **`QueryClient` and `QueryClientProvider`** in `main.jsx` create the cache and make it available to every component.
- **`useQuery`** in `dashboard.jsx` and `stats.jsx` fetches the todos:
  - `queryKey: ["todos"]` names the cached data. Both pages use the same key, so they share one cached result and switching pages does not trigger a second request.
  - `queryFn: getData` is the fetch function from `src/api/todos.js`. It throws when the response is not OK, which is what puts the query into the error state.
  - `staleTime` controls how long cached data counts as fresh before a refetch.
  - `retry: false` on the Tasks page shows errors immediately instead of retrying first.
- **Returned values** drive the UI states: `isLoading` shows the skeleton, `isError` and `error` show the error card, and `refetch` powers the "Try again" and "Refresh" buttons. Once `data` arrives, an empty array shows the empty state.

### React hooks

- **`useState`** in `dashboard.jsx` holds the selected user and status. The filtered list is calculated on every render from the cached todos, so no extra effect or request is needed.

## Data

Todos come from JSONPlaceholder (`/todos`): 200 items shaped like `{ userId, id, title, completed }`. Users are shown as "User 1" to "User 10" because the todos only contain a `userId`.

## Known limitations

- There is no text search yet.
- The "Showing X of Y tasks" line on the Tasks page is still fixed text.
- Marking a task as done is not implemented, and JSONPlaceholder does not save changes anyway.
