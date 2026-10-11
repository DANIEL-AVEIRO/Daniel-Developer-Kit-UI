const Divider = ({ label }) => {
  if (!label) {
    return <hr className="border-stone-200 dark:border-stone-800" />
  }

  return (
    <div className="flex items-center gap-3" role="separator">
      <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
      <span className="text-xs font-medium tracking-wide text-stone-500 uppercase">{label}</span>
      <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
    </div>
  )
}

export default Divider
