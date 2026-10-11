import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useState } from 'react'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'archive', label: 'Archive' },
]

const CollapsibleSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('projects')

  return (
    <div className="flex min-h-72 overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      <aside className={`flex shrink-0 flex-col border-r border-stone-200 p-2 dark:border-stone-800 ${collapsed ? 'w-14' : 'w-48'}`}>
        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          aria-pressed={collapsed}
          className="mb-2 inline-flex h-9 items-center justify-center gap-2 rounded-md px-2 text-sm hover:bg-stone-100 dark:hover:bg-stone-800"
        >
          {collapsed ? <PanelLeftOpen className="size-4" aria-hidden="true" /> : <PanelLeftClose className="size-4" aria-hidden="true" />}
          <span className={collapsed ? 'sr-only' : ''}>{collapsed ? 'Expand sidebar' : 'Collapse'}</span>
        </button>
        <nav aria-label="Collapsible">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={active === item.id ? 'page' : undefined}
                  onClick={() => setActive(item.id)}
                  className={`flex h-9 w-full items-center rounded-md px-2 text-sm ${active === item.id ? 'bg-teal-800 text-white dark:bg-teal-600 dark:text-stone-950' : 'hover:bg-stone-100 dark:hover:bg-stone-800'}`}
                >
                  <span className={collapsed ? 'sr-only' : ''}>{item.label}</span>
                  {collapsed ? <span aria-hidden="true">{item.label.slice(0, 1)}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="p-4 text-sm">
        <h2 className="font-semibold capitalize">{active}</h2>
        <p className="mt-2 text-stone-600 dark:text-stone-400">The sidebar keeps its selection while it collapses to initials.</p>
      </div>
    </div>
  )
}

export default CollapsibleSidebar
