import { TrendingDown, TrendingUp } from 'lucide-react'

const StatCard = ({ label, value, change, direction = 'up', hint }) => {
  const positive = direction === 'up'
  const Icon = positive ? TrendingUp : TrendingDown

  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
      <p className="text-sm text-stone-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-50">{value}</p>
      <p className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${positive ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>
        <Icon className="size-3.5" aria-hidden="true" />
        {change}
        {hint ? <span className="font-normal text-stone-500">{hint}</span> : null}
      </p>
    </article>
  )
}

export default StatCard
