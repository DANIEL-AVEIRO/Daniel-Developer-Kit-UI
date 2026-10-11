import { getCategoriesForKind } from "../../registry/registryIndex.js";
import { cx } from "../../utils/cx.js";

const CategoryFilter = ({ kind, value, onChange }) => {
  const options = getCategoriesForKind(kind);

  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="flex flex-wrap gap-2"
    >
      <FilterButton selected={value === ""} onClick={() => onChange("")}>
        All
      </FilterButton>
      {options.map((category) => (
        <FilterButton
          key={category.id}
          selected={value === category.id}
          onClick={() => onChange(category.id)}
        >
          {category.name}
        </FilterButton>
      ))}
    </div>
  );
};

const FilterButton = ({ selected, onClick, children }) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cx(
        "rounded-xl border px-3 py-1.5 text-sm transition-colors",
        selected
          ? "border-accent bg-accent text-white"
          : "border-stone-300 bg-paper text-stone-700 hover:border-indigo-300 hover:bg-indigo-50 dark:border-stone-700 dark:bg-paper-dark dark:text-stone-200 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10",
      )}
    >
      {children}
    </button>
  );
};

export default CategoryFilter;
