import { Search, X } from "lucide-react";
import { useState } from "react";

const SearchField = ({
  id = "search-field",
  label = "Search",
  placeholder = "Search",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  function submit(event) {
    event.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form onSubmit={submit} className="w-full">
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-stone-800 dark:text-stone-200"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <div className="relative min-w-0 flex-1">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-stone-400"
            aria-hidden="true"
          />
          <input
            id={id}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            className="h-10 w-full rounded-md border border-stone-300 bg-white pr-9 pl-9 text-sm text-stone-900 outline-none focus:border-teal-800 focus:ring-2 focus:ring-teal-800/15 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:focus:border-teal-500"
          />
          {query ? (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </div>
        <button
          type="submit"
          className="h-10 rounded-md bg-teal-800 px-3 text-sm font-medium text-white hover:bg-teal-900 dark:bg-teal-600 dark:text-stone-950"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchField
