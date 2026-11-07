# TaskBoard

A small task manager built with React. It loads a list of todos from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, lets you filter them, and shows summary statistics.

## Features

- **Tasks (`/`)**: list of todos, each with its assigned user and an Open/Done badge. Filter by **status** (All / Open / Done) and by **user**. Both filters can be combined.
- **Stats (`/stats`)**: total, done and open counts, plus a bar chart of done tasks per user. All numbers are computed from the same todos data.
- **Task detail (`/tasks/:id`)** and **About (`/about`)**: pages and routes exist, but they are layout only for now (placeholder content).
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
│   └── about.jsx         # About page (placeholder)
├── App.jsx               # Routes
├── main.jsx              # Entry: Router and QueryClientProvider
└── index.css             # Tailwind import
```

## Data

Todos come from JSONPlaceholder (`/todos`): 200 items shaped like `{ userId, id, title, completed }`. Users are shown as "User 1" to "User 10" because the todos only contain a `userId`.

## Known limitations

- There is no text search yet.
- The "Showing X of Y tasks" line on the Tasks page is still fixed text.
- Marking a task as done is not implemented, and JSONPlaceholder does not save changes anyway.
