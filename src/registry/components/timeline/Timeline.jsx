import { useState } from 'react'

const events = [
  { id: 1, title: 'Brief published', detail: 'The studio brief was shared with the class.', date: 'Mar 2' },
  { id: 2, title: 'First critique', detail: 'Navigation patterns were reviewed in groups.', date: 'Mar 9' },
  { id: 3, title: 'Build week', detail: 'Students assembled a page from copied components.', date: 'Mar 16' },
  { id: 4, title: 'Final review', detail: 'Projects are presented with source and a live preview.', date: 'Mar 23' },
]

const Timeline = () => {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? events : events.slice(0, 3)

  return (
    <div>
      <ol className="space-y-4 border-l border-stone-200 pl-4 dark:border-stone-700">
        {visible.map((event) => (
          <li key={event.id} className="relative">
            <span className="absolute top-1.5 -left-[1.3rem] size-2.5 rounded-full bg-teal-800 dark:bg-teal-400" aria-hidden="true" />
            <p className="text-xs text-stone-500">{event.date}</p>
            <p className="text-sm font-medium text-stone-950 dark:text-stone-50">{event.title}</p>
            <p className="text-sm text-stone-600 dark:text-stone-400">{event.detail}</p>
          </li>
        ))}
      </ol>
      <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-4 text-sm font-medium text-teal-800 dark:text-teal-300">
        {expanded ? 'Show fewer events' : 'Show the final review'}
      </button>
    </div>
  )
}

export default Timeline
