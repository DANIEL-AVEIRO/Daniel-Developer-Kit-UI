import { Bell, LayoutTemplate, Settings, Shield, Users } from 'lucide-react'
import { useState } from 'react'
import { adminTasks, adminUsers } from './sampleData.js'

const nav = [
  { id: 'users', label: 'Users', icon: Users },
  { id: 'roles', label: 'Roles', icon: Shield },
  { id: 'content', label: 'Content', icon: LayoutTemplate },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const AdminDashboard = () => {
  const [section, setSection] = useState('users')
  const [query, setQuery] = useState('')
  const users = adminUsers.filter((user) => `${user.name} ${user.role}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="min-h-[40rem] bg-stone-100 dark:bg-stone-950">
      <header className="border-b border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-semibold">Admin console</p>
            <p className="text-xs text-stone-500">Local sample users and tasks</p>
          </div>
          <button type="button" className="inline-flex size-9 items-center justify-center rounded-md border border-stone-300 dark:border-stone-700" aria-label="Notifications">
            <Bell className="size-4" aria-hidden="true" />
          </button>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-4 md:grid-cols-[14rem_1fr]">
        <aside className="rounded-xl border border-stone-200 bg-white p-2 dark:border-stone-800 dark:bg-stone-900">
          {nav.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.id} type="button" onClick={() => setSection(item.id)} className={`mb-1 flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm ${section === item.id ? 'bg-teal-800 text-white dark:bg-teal-600 dark:text-stone-950' : 'hover:bg-stone-100 dark:hover:bg-stone-800'}`}>
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </button>
            )
          })}
        </aside>
        <div className="space-y-4">
          <section className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-lg font-semibold capitalize">{section}</h1>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter users" className="h-9 rounded-md border border-stone-300 px-3 text-sm dark:border-stone-700 dark:bg-stone-950" />
            </div>
            <ul className="mt-4 divide-y divide-stone-200 dark:divide-stone-800">
              {users.map((user) => (
                <li key={user.name} className="flex items-center justify-between py-3 text-sm">
                  <span>
                    <span className="block font-medium">{user.name}</span>
                    <span className="text-stone-500">{user.role}</span>
                  </span>
                  <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs dark:bg-stone-800">{user.status}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
            <h2 className="text-sm font-semibold">Today</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {adminTasks.map((task) => (
                <li key={task} className="rounded-md bg-stone-50 px-3 py-2 dark:bg-stone-950">{task}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
