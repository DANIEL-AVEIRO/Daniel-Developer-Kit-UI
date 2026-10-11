import { Link } from "react-router-dom";
import { primaryNav } from "../../data/siteLinks.js";

const AppFooter = () => {
  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-stone-200/80 px-4 py-10 sm:px-6 lg:px-8 dark:border-stone-800">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight text-stone-950 dark:text-stone-50">
            DevKit UI
          </p>
          <p className="mt-1.5 max-w-md text-sm leading-6 text-stone-600 dark:text-stone-400">
            A local registry of React components for Vite and Tailwind CSS
            projects.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-stone-600 transition-colors hover:text-accent dark:text-stone-400 dark:hover:text-indigo-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;
