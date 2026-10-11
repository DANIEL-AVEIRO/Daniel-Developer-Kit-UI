const tones = {
  neutral: 'bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-100',
  info: 'bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-200',
  success: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200',
  warning: 'bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-200',
  danger: 'bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-200',
}

const Badge = ({ tone = 'neutral', className = '', children }) => {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone] || tones.neutral} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
