import { Handshake } from 'lucide-react'
import { useState } from 'react'
import { deals, stages } from './sampleData.js'

const CrmDashboard = () => {
  const [stage, setStage] = useState('all')
  const visible = deals.filter((deal) => stage === 'all' || deal.stage === stage)

  return (
    <div className="min-h-[40rem] bg-stone-100 dark:bg-stone-950">
      <header className="border-b border-stone-200 bg-white px-4 py-3 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center gap-2">
          <Handshake className="size-5 text-teal-800 dark:text-teal-400" aria-hidden="true" />
          <div>
            <h1 className="text-lg font-semibold">CRM pipeline</h1>
            <p className="text-xs text-stone-500">Deal amounts are sample figures</p>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by stage">
          <FilterChip label="All" active={stage === 'all'} onClick={() => setStage('all')} />
          {stages.map((item) => (
            <FilterChip key={item} label={item} active={stage === item} onClick={() => setStage(item)} />
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stages.map((item) => {
            const count = deals.filter((deal) => deal.stage === item).length
            return (
              <article key={item} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                <p className="text-xs text-stone-500">{item}</p>
                <p className="mt-1 text-2xl font-semibold">{count}</p>
              </article>
            )
          })}
        </div>
        <section className="overflow-x-auto rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="text-stone-500">
              <tr>
                <th className="px-3 py-2 font-medium">Company</th>
                <th className="px-3 py-2 font-medium">Owner</th>
                <th className="px-3 py-2 font-medium">Stage</th>
                <th className="px-3 py-2 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((deal) => (
                <tr key={deal.id} className="border-t border-stone-200 dark:border-stone-800">
                  <td className="px-3 py-2 font-medium">{deal.company}</td>
                  <td className="px-3 py-2">{deal.owner}</td>
                  <td className="px-3 py-2">{deal.stage}</td>
                  <td className="px-3 py-2">{deal.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

const FilterChip = ({ label, active, onClick }) => {
  return (
    <button type="button" aria-pressed={active} onClick={onClick} className={`rounded-md px-3 py-1.5 text-sm ${active ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : 'bg-white dark:bg-stone-900'}`}>
      {label}
    </button>
  )
}

export default CrmDashboard
