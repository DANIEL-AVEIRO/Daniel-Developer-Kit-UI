const TextField = ({ id, label, hint, error, className = '', ...props }) => {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-stone-800 dark:text-stone-200">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`w-full rounded-md border bg-white px-3 py-2 text-sm text-stone-900 shadow-sm outline-none placeholder:text-stone-400 focus:ring-2 disabled:cursor-not-allowed disabled:bg-stone-100 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:disabled:bg-stone-800 ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-700' : 'border-stone-300 focus:border-teal-800 focus:ring-teal-800/15 dark:border-stone-700 dark:focus:border-teal-500'}`}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700 dark:text-red-300">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-stone-500">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export default TextField
