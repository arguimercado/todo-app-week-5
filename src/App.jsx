import AppHeader from "./components/app-header";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import TaskDetail from "./components/task-detail";
import Stats from "./components/stats";
import About from "./components/about";

function App() {
  return (
    <div className="min-h-screen w-full bg-purple-50 text-slate-800">
      <AppHeader />
      <main className="mx-auto w-full max-w-4xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
