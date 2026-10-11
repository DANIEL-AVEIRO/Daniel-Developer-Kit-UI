import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sampleItems = [
  {
    id: 'install',
    title: 'Install Tailwind',
    content: 'Add the Tailwind Vite plugin and import Tailwind once in your stylesheet.',
  },
  {
    id: 'copy',
    title: 'Copy the component',
    content: 'Use the source tab and save the file with the filename shown above the code.',
  },
  {
    id: 'theme',
    title: 'Dark mode',
    content: 'The component uses dark: utilities. Enable class-based dark mode if you want a manual toggle.',
  },
]

const Accordion = ({ items = sampleItems }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className="divide-y divide-stone-200 overflow-hidden rounded-lg border border-stone-200 dark:divide-stone-800 dark:border-stone-800">
      {items.map((item) => {
        const open = openId === item.id
        const panelId = `accordion-panel-${item.id}`
        const buttonId = `accordion-button-${item.id}`
        return (
          <div key={item.id} className="bg-white dark:bg-stone-900">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-stone-900 dark:text-stone-100"
              >
                {item.title}
                <ChevronDown className={`size-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </h3>
            {open ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-4 pb-4 text-sm leading-6 text-stone-600 dark:text-stone-400">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
