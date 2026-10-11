import { useState } from 'react'

const groups = [
  {
    title: 'Studio',
    items: [
      { id: 'brief', label: 'Brief' },
      { id: 'files', label: 'Files' },
      { id: 'reviews', label: 'Reviews' },
    ],
  },
  {
    title: 'Course',
    items: [
      { id: 'people', label: 'People' },
      { id: 'calendar', label: 'Calendar' },
    ],
  },
]

const panels = {
  brief: 'The brief describes the audience, the deadline, and the constraints for this project.',
  files: 'Three source files are attached. They are sample files, not a live upload.',
  reviews: 'Two reviews are waiting. Comments stay in this preview.',
  people: 'Amina, Leo, and Noah are assigned to the studio group.',
  calendar: 'The next critique is Wednesday at 10:00.',
}

const SidebarNav = () => {
  const [active, setActive] = useState('brief')

  return (
    <div className="grid overflow-hidden rounded-lg border border-stone-200 bg-white md:grid-cols-[14rem_1fr] dark:border-stone-800 dark:bg-stone-900">
      <nav aria-label="Sidebar" className="border-b border-stone-200 p-3 md:border-r md:border-b-0 dark:border-stone-800">
        {groups.map((group) => (
          <div key={group.title} className="mb-4 last:mb-0">
            <p className="px-2 text-xs font-medium tracking-wide text-stone-500 uppercase">{group.title}</p>
            <ul className="mt-1 space-y-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-current={active === item.id ? 'page' : undefined}
                    onClick={() => setActive(item.id)}
                    className={`w-full rounded-md px-2 py-1.5 text-left text-sm ${active === item.id ? 'bg-stone-200 font-medium text-stone-950 dark:bg-stone-800 dark:text-stone-50' : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="p-4 text-sm leading-6 text-stone-700 dark:text-stone-300">
        <h2 className="text-base font-semibold text-stone-950 capitalize dark:text-stone-50">{active}</h2>
        <p className="mt-2">{panels[active]}</p>
      </div>
    </div>
  )
}

export default SidebarNav
