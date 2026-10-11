import { useState } from 'react'

const events = [
  { id: 1, type: 'review', title: 'Amina requested a review', time: '12 minutes ago' },
  { id: 2, type: 'submit', title: 'Leo submitted the navbar exercise', time: '1 hour ago' },
  { id: 3, type: 'comment', title: 'Noah commented on the pricing block', time: '3 hours ago' },
  { id: 4, type: 'review', title: 'Priya approved the empty state', time: 'Yesterday' },
]

const filters = ['all', 'review', 'submit', 'comment']

const ActivityFeed = () => {
  const [filter, setFilter] = useState('all')
  const visible = events.filter((event) => filter === 'all' || event.type === filter)

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Filter activity">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize ${filter === item ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-200'}`}
          >
            {item}
          </button>
        ))}
      </div>
      <ol className="divide-y divide-stone-200 rounded-lg border border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        {visible.map((event) => (
          <li key={event.id} className="px-3 py-3 text-sm">
            <p className="font-medium text-stone-950 dark:text-stone-50">{event.title}</p>
            <p className="mt-0.5 text-xs text-stone-500">{event.time}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ActivityFeed
