import { SearchX } from "lucide-react";

const EmptyState = ({ title, description, action }) => {
  return (
    <div className="rounded-xl border border-dashed border-indigo-200 bg-paper px-6 py-14 text-center dark:border-indigo-400/30 dark:bg-paper-dark">
      <SearchX className="mx-auto size-5 text-accent dark:text-accent-soft" aria-hidden="true" />
      <h2 className="mt-3 text-base font-semibold text-ink dark:text-stone-50">
        {title}
      </h2>
      <p className="mx-auto mt-1 max-w-md text-sm text-stone-600 dark:text-stone-400">
        {description}
      </p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
};

export default EmptyState;
