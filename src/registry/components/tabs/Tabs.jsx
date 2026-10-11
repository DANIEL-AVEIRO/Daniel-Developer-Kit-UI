import { useRef, useState } from 'react'

const sampleTabs = [
  { id: 'preview', label: 'Preview', content: 'The preview renders this React component. It is not a screenshot.' },
  { id: 'source', label: 'Source', content: 'Copy the file from the source tab. The import names match the exports in that file.' },
  { id: 'setup', label: 'Setup', content: 'Tailwind CSS needs to be active in the project that receives the copied file.' },
]

const Tabs = ({ tabs = sampleTabs, defaultTab }) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)
  const listRef = useRef(null)
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0]

  function onKeyDown(event) {
    const index = tabs.findIndex((tab) => tab.id === current?.id)
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = tabs.length - 1
    else return
    event.preventDefault()
    const id = tabs[next].id
    setActive(id)
    listRef.current?.querySelector(`[data-tab="${id}"]`)?.focus()
  }

  if (!current) return null

  return (
    <div>
      <div ref={listRef} role="tablist" aria-label="Sections" className="flex gap-1 border-b border-stone-200 dark:border-stone-800">
        {tabs.map((tab) => {
          const selected = tab.id === current.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              data-tab={tab.id}
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onKeyDown={onKeyDown}
              onClick={() => setActive(tab.id)}
              className={`border-b-2 px-3 py-2 text-sm font-medium ${selected ? 'border-teal-800 text-stone-950 dark:border-teal-400 dark:text-stone-50' : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'}`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="px-1 py-4 text-sm leading-6 text-stone-700 dark:text-stone-300">
        {current.content}
      </div>
    </div>
  )
}

export default Tabs
