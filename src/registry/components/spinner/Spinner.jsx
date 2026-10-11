const sizes = {
  sm: 'size-4 border-2',
  md: 'size-6 border-2',
  lg: 'size-8 border-[3px]',
}

const Spinner = ({ label = 'Loading', size = 'md' }) => {
  return (
    <span role="status" className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
      <span
        className={`inline-block animate-spin rounded-full border-stone-300 border-t-teal-800 dark:border-stone-700 dark:border-t-teal-400 ${sizes[size] || sizes.md}`}
        aria-hidden="true"
      />
      {label}
    </span>
  )
}

export default Spinner
