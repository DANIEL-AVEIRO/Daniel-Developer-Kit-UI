const PageHeader = ({ eyebrow, title, description, actions }) => {
  return (
    <header className="border-b border-stone-200/80 pb-6 dark:border-stone-800">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase dark:text-accent-soft">
          {eyebrow}
        </p>
      ) : null}
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-ink dark:text-stone-50">
          {title}
        </h1>
        {actions}
      </div>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600 dark:text-stone-400">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export default PageHeader
