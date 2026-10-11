import { Menu, Moon, Settings, Sun, X } from "lucide-react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { primaryNav } from "../../data/siteLinks.js";
import { useTheme } from "../../hooks/useTheme.js";
import { cx } from "../../utils/cx.js";
import SearchInput from "../common/SearchInput.jsx";

const AppHeader = ({ menuOpen, onMenuToggle }) => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        const desktop = document.getElementById("header-search");
        const mobile = document.getElementById("mobile-search");
        const target = desktop?.offsetParent ? desktop : mobile;
        target?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-paper/90 backdrop-blur-md dark:border-stone-800 dark:bg-paper-dark/90">
      <div className="flex h-14 w-full items-center gap-3 px-3 sm:px-4">
        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-xl text-stone-700 transition-colors hover:bg-indigo-50 lg:hidden dark:text-stone-200 dark:hover:bg-indigo-500/10"
          aria-expanded={menuOpen}
          aria-controls="mobile-sidebar"
          onClick={onMenuToggle}
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
        </button>

        <Link
          to="/"
          className="group flex items-center gap-2.5 font-semibold tracking-tight text-ink dark:text-stone-50"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-[10px] font-semibold tracking-wide text-white">
            DK
          </span>
          <span className="text-[15px]">DevKit UI</span>
        </Link>

        <nav
          className="ml-5 hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(
                  "relative rounded-xl px-2.5 py-1.5 text-sm transition-colors",
                  isActive
                    ? "font-medium text-accent dark:text-indigo-200"
                    : "text-stone-600 hover:bg-indigo-50 hover:text-indigo-950 dark:text-stone-400 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-100",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-accent dark:bg-accent-soft"
                      aria-hidden="true"
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden w-full max-w-sm md:block">
          <SearchInput id="header-search" shortcut />
        </div>

        <Link
          to="/settings"
          className="ml-auto inline-flex size-9 items-center justify-center rounded-xl text-stone-600 hover:bg-indigo-50 hover:text-accent md:ml-0 dark:text-stone-300 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-100"
          aria-label="Settings"
        >
          <Settings className="size-4" aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-xl text-stone-700 transition-colors hover:bg-indigo-50 dark:text-stone-200 dark:hover:bg-indigo-500/10"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextTheme} theme`}
        >
          {theme === "dark" ? (
            <Sun className="size-4" aria-hidden="true" />
          ) : (
            <Moon className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="border-t border-stone-200/80 px-4 py-3 md:hidden dark:border-stone-800">
        <SearchInput id="mobile-search" />
      </div>
    </header>
  );
};

export default AppHeader;
