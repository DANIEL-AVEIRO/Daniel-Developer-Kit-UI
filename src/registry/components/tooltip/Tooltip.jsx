const Tooltip = ({ label, children }) => {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-56 -translate-x-1/2 rounded-md bg-stone-900 px-2 py-1 text-xs leading-5 text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-stone-100 dark:text-stone-950"
      >
        {label}
      </span>
    </span>
  )
}

export default Tooltip
