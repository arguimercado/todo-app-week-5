import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Tasks", end: true },
  { to: "/stats", label: "Stats" },
  { to: "/about", label: "About" },
];

function AppHeader() {
  return (
    <header className="w-full border-b border-purple-200 bg-purple-100/60">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-4 py-4 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <h1 className="text-2xl font-bold text-purple-800">TaskBoard</h1>
        <nav className="flex gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `border-b-2 pb-1 text-sm font-medium ${
                  isActive
                    ? "border-purple-800 font-bold text-purple-800"
                    : "border-transparent text-slate-500 hover:text-purple-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
