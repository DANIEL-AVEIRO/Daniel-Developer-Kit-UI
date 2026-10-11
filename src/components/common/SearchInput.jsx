import { Search } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCategory,
  pathForKind,
  searchRegistry,
} from "../../registry/registryIndex.js";
import { cx } from "../../utils/cx.js";

const SearchInput = ({
  id,
  mode = "navigate",
  value,
  onChange,
  placeholder = "Search by name, description, tag, or category",
  label = "Search the registry",
  autoFocus = false,
  shortcut = false,
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listId = `${inputId}-results`;
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [internalQuery, setInternalQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeQuery, setActiveQuery] = useState("");
  const query = mode === "filter" ? (value ?? "") : internalQuery;
  const matches = useMemo(
    () => (mode === "navigate" ? searchRegistry(query) : []),
    [mode, query],
  );
  const results = matches.slice(0, 8);

  if (activeQuery !== query) {
    setActiveQuery(query);
    setActiveIndex(0);
  }

  useEffect(() => {
    if (!open) return undefined;
    function onPointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function updateQuery(next) {
    if (mode === "filter") onChange?.(next);
    else setInternalQuery(next);
    setOpen(true);
  }

  function openResult(item) {
    if (item) {
      navigate(`/${pathForKind(item.kind)}/${item.slug}`);
      setInternalQuery("");
    } else {
      navigate(`/components?q=${encodeURIComponent(query.trim())}`);
    }
    setOpen(false);
  }

  function onKeyDown(event) {
    if (mode === "filter") return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) =>
        Math.min(index + 1, Math.max(results.length - 1, 0)),
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      openResult(open && results[activeIndex] ? results[activeIndex] : null);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const showList = mode === "navigate" && open && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-stone-400 dark:text-stone-500"
        aria-hidden="true"
      />
      <input
        id={inputId}
        role={mode === "navigate" ? "combobox" : undefined}
        aria-expanded={mode === "navigate" ? showList : undefined}
        aria-controls={mode === "navigate" ? listId : undefined}
        aria-autocomplete={mode === "navigate" ? "list" : undefined}
        aria-activedescendant={
          showList && results[activeIndex]
            ? `${listId}-${results[activeIndex].id}`
            : undefined
        }
        value={query}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(event) => updateQuery(event.target.value)}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        className="h-10 w-full rounded-xl border border-stone-300 bg-paper pr-16 pl-9 text-sm text-ink outline-none placeholder:text-stone-400 focus:border-accent focus:ring-2 focus:ring-accent/15 dark:border-stone-700 dark:bg-paper-dark dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-accent-soft dark:focus:ring-accent-soft/20"
      />
      {shortcut && !query ? (
        <kbd className="pointer-events-none absolute top-1/2 right-2 hidden -translate-y-1/2 rounded-lg border border-stone-200 bg-canvas px-1.5 py-0.5 font-mono text-[10px] text-stone-500 sm:inline dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-400">
          {shortcutLabel()}
        </kbd>
      ) : null}
      {showList ? (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-stone-200 bg-paper shadow-[var(--shadow-overlay)] dark:border-stone-700 dark:bg-paper-dark">
          {results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-stone-500">
              No matches in components, blocks, or templates.
            </p>
          ) : (
            <ul
              id={listId}
              role="listbox"
              className="max-h-80 overflow-y-auto py-1"
            >
              {results.map((item, index) => (
                <li
                  key={item.id}
                  id={`${listId}-${item.id}`}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <button
                    type="button"
                    className={cx(
                      "flex w-full items-start justify-between gap-3 px-3 py-2 text-left",
                      index === activeIndex
                        ? "bg-indigo-50 dark:bg-indigo-500/15"
                        : "hover:bg-indigo-50/70 dark:hover:bg-indigo-500/10",
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => openResult(item)}
                  >
                    <span>
                      <span className="block text-sm font-medium text-ink dark:text-stone-50">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-stone-500">
                        {getCategory(item.category)?.name}
                      </span>
                    </span>
                    <span className="text-[11px] tracking-wide text-stone-400 uppercase">
                      {item.kind}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {matches.length > results.length ? (
            <p className="border-t border-stone-200 px-3 py-2 text-xs text-stone-500 dark:border-stone-800">
              Showing {results.length} of {matches.length}. Press Enter to open the component search.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

function shortcutLabel() {
  const platform = navigator.userAgent || "";
  return /Mac|iPhone|iPad/.test(platform) ? "⌘K" : "Ctrl K";
}

export default SearchInput;
