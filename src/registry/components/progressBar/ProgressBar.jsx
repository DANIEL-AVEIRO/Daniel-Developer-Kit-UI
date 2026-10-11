const ProgressBar = ({ value = 0, label = 'Progress' }) => {
  const safe = Math.min(100, Math.max(0, Math.round(value)))

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm text-stone-700 dark:text-stone-300">
        <span>{label}</span>
        <span className="font-mono text-xs">{safe}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={safe}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-800"
      >
        <div className="h-full rounded-full bg-teal-800 dark:bg-teal-500" style={{ width: `${safe}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
