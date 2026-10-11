import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    id: 'copy',
    q: 'Can I paste these into a class project?',
    a: 'Yes. Copy the source files and keep the same filenames for relative imports.',
  },
  {
    id: 'backend',
    q: 'Do these call a backend?',
    a: 'No. Forms validate in the browser and dashboards use local sample data.',
  },
  {
    id: 'tailwind',
    q: 'Which Tailwind version do I need?',
    a: 'These examples target Tailwind CSS v4 with the official Vite plugin.',
  },
]

const FaqSection = () => {
  const [open, setOpen] = useState(items[0].id)

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
      <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
      <div className="mt-4 divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        {items.map((item) => {
          const expanded = open === item.id
          return (
            <div key={item.id}>
              <h3>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : item.id)}
                  className="flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-medium"
                >
                  {item.q}
                  <ChevronDown className={`size-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </h3>
              {expanded ? <p className="pb-3 text-sm leading-6 text-stone-600 dark:text-stone-400">{item.a}</p> : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FaqSection
