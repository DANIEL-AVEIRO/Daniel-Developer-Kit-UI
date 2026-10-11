import { ChartColumn, House, Settings, Users } from 'lucide-react'
import { useState } from 'react'
import { analyticsRows, analyticsSeries, analyticsStats } from './sampleData.js'

const nav = [
  { id: 'overview', label: 'Overview', icon: House },
  { id: 'audience', label: 'Audience', icon: Users },
  { id: 'reports', label: 'Reports', icon: ChartColumn },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const AnalyticsDashboard = () => {
  const [section, setSection] = useState('overview')
  const max = Math.max(...analyticsSeries.map((item) => item.value))

  return (
    <div className="min-h-[40rem] bg-stone-100 text-stone-900 dark:bg-stone-950 dark:text-stone-50">
      <div className="mx-auto grid min-h-[40rem] max-w-6xl md:grid-cols-[15rem_1fr]">
        <aside className="border-b border-stone-200 bg-white p-3 md:border-r md:border-b-0 dark:border-stone-800 dark:bg-stone-900">
          <p className="px-2 text-sm font-semibold">Analytics</p>
          <nav aria-label="Dashboard" className="mt-3 space-y-1">
            {nav.map((item) => {
              const Icon = item.icon
              const active = section === item.id
              return (
                <button key={item.id} type="button" aria-current={active ? 'page' : undefined} onClick={() => setSection(item.id)} className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm ${active ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : 'hover:bg-stone-100 dark:hover:bg-stone-800'}`}>
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </aside>
        <div>
          <header className="flex items-center justify-between border-b border-stone-200 bg-white px-4 py-3 dark:border-stone-800 dark:bg-stone-900">
            <div>
              <h1 className="text-lg font-semibold capitalize">{section}</h1>
              <p className="text-xs text-stone-500">Sample data · not connected to an API</p>
            </div>
            <button type="button" className="rounded-md border border-stone-300 px-3 py-1.5 text-sm dark:border-stone-700">
              Export CSV
            </button>
          </header>
          <div className="space-y-4 p-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {analyticsStats.map((stat) => (
                <article key={stat.label} className="rounded-lg border border-stone-200 bg-white p-3 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-xs text-stone-500">{stat.label}</p>
                  <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs text-teal-800 dark:text-teal-300">{stat.change}</p>
                </article>
              ))}
            </div>
            <section className="rounded-lg border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
              <h2 className="text-sm font-semibold">Weekly visitors</h2>
              <div className="mt-4 flex h-40 items-end gap-2">
                {analyticsSeries.map((item) => (
                  <div key={item.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end">
                      <div className="w-full rounded-t bg-teal-800 dark:bg-teal-500" style={{ height: `${(item.value / max) * 100}%` }} title={`${item.value}`} />
                    </div>
                    <span className="text-[11px] text-stone-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="overflow-x-auto rounded-lg border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead className="bg-stone-50 text-stone-500 dark:bg-stone-950">
                  <tr>
                    <th className="px-3 py-2 font-medium">Page</th>
                    <th className="px-3 py-2 font-medium">Views</th>
                    <th className="px-3 py-2 font-medium">Bounce</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsRows.map((row) => (
                    <tr key={row.page} className="border-t border-stone-200 dark:border-stone-800">
                      <td className="px-3 py-2 font-mono text-xs">{row.page}</td>
                      <td className="px-3 py-2">{row.views}</td>
                      <td className="px-3 py-2">{row.bounce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
