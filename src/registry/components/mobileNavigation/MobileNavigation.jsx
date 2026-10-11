import { House, Inbox, Search, UserRound } from 'lucide-react'
import { useState } from 'react'

const tabs = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'inbox', label: 'Inbox', icon: Inbox },
  { id: 'profile', label: 'Profile', icon: UserRound },
]

const copy = {
  home: 'Today’s studio starts with a critique of the navigation prototypes.',
  search: 'Search stays inside this demo. Try the tabs along the bottom.',
  inbox: 'Two unread notes from the course staff.',
  profile: 'Noah Adeyemi · Frontend track',
}

const MobileNavigation = () => {
  const [tab, setTab] = useState('home')

  return (
    <div className="mx-auto flex min-h-[28rem] max-w-sm flex-col overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
      <header className="border-b border-stone-200 px-4 py-3 dark:border-stone-800">
        <p className="text-xs text-stone-500">Fieldnote</p>
        <h2 className="text-base font-semibold capitalize">{tab}</h2>
      </header>
      <div className="flex-1 p-4 text-sm leading-6 text-stone-700 dark:text-stone-300">{copy[tab]}</div>
      <nav aria-label="Mobile" className="grid grid-cols-4 border-t border-stone-200 dark:border-stone-800">
        {tabs.map((item) => {
          const Icon = item.icon
          const selected = tab === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-current={selected ? 'page' : undefined}
              onClick={() => setTab(item.id)}
              className={`flex flex-col items-center gap-1 py-2 text-xs ${selected ? 'text-teal-800 dark:text-teal-300' : 'text-stone-500'}`}
            >
              <Icon className="size-4" aria-hidden="true" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default MobileNavigation
