const tones = {
  online: 'bg-emerald-500',
  away: 'bg-amber-500',
  busy: 'bg-red-500',
  offline: 'bg-stone-400',
  pending: 'bg-sky-500',
  paid: 'bg-emerald-500',
  failed: 'bg-red-500',
}

const StatusBadge = ({ status = 'online' }) => {
  const dot = tones[status] || tones.offline
  const label = status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-800 dark:text-stone-100">
      <span className={`size-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {label}
    </span>
  )
}

export default StatusBadge
