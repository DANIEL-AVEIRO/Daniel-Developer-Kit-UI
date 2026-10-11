import { Link } from "react-router-dom";
import { getCategory, pathForKind } from "../../registry/registryIndex.js";
import FavoriteButton from "../common/FavoriteButton.jsx";

const ComponentCard = ({ entry }) => {
  const category = getCategory(entry.category);

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-stone-200/90 bg-paper p-4 shadow-sm transition-colors hover:border-indigo-300 dark:border-stone-800 dark:bg-paper-dark dark:hover:border-indigo-400/40">
      <div className="absolute top-3 right-3 z-10">
        <FavoriteButton entry={entry} iconOnly className="size-8 justify-center px-0" />
      </div>
    <Link
      to={`/${pathForKind(entry.kind)}/${entry.slug}`}
      className="flex h-full flex-col pr-10"
    >
      <div>
        <p className="text-xs font-medium tracking-wide text-accent dark:text-accent-soft">
          {category?.name}
        </p>
        <h3 className="mt-1 text-base font-semibold tracking-tight text-ink dark:text-stone-50">
          {entry.name}
        </h3>
      </div>
      <p className="mt-2.5 flex-1 text-sm leading-6 text-stone-600 dark:text-stone-400">
        {entry.description}
      </p>
      {entry.tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {entry.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-lg bg-indigo-50 px-1.5 py-0.5 text-[11px] font-medium text-indigo-900 ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-200 dark:ring-indigo-400/20"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </Link>
    </article>
  );
};

export default ComponentCard;
