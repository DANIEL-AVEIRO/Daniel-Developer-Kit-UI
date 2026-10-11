import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'

const sampleRows = [
  { name: 'Amina Shah', track: 'Frontend', status: 'Active', score: 94 },
  { name: 'Leo Martins', track: 'Design', status: 'Review', score: 81 },
  { name: 'Noah Adeyemi', track: 'Frontend', status: 'Active', score: 88 },
  { name: 'Priya Nair', track: 'Research', status: 'Waitlist', score: 76 },
  { name: 'Jonah Ellis', track: 'Design', status: 'Active', score: 91 },
]

const DataTable = ({ rows = sampleRows }) => {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState({ key: 'name', direction: 'asc' })

  const visible = useMemo(() => {
    const filtered = rows.filter((row) =>
      `${row.name} ${row.track} ${row.status}`.toLowerCase().includes(query.trim().toLowerCase()),
    )
    const sorted = [...filtered].sort((a, b) => {
      const left = a[sort.key]
      const right = b[sort.key]
      if (left < right) return sort.direction === 'asc' ? -1 : 1
      if (left > right) return sort.direction === 'asc' ? 1 : -1
      return 0
    })
    return sorted
  }, [query, rows, sort])

  function toggleSort(key) {
    setSort((current) =>
      current.key === key
        ? { key, direction: current.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' },
    )
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium">Filter students</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Name, track, or status"
          className="h-10 w-full max-w-xs rounded-md border border-stone-300 bg-white px-3 text-sm outline-none focus:border-teal-800 dark:border-stone-700 dark:bg-stone-900"
        />
      </label>
      <div className="overflow-x-auto rounded-lg border border-stone-200 dark:border-stone-800">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="sr-only">Sample student scores</caption>
          <thead className="bg-stone-50 text-stone-500 dark:bg-stone-900">
            <tr>
              {[
                ['name', 'Name'],
                ['track', 'Track'],
                ['status', 'Status'],
                ['score', 'Score'],
              ].map(([key, label]) => (
                <th key={key} scope="col" className="px-3 py-2 font-medium" aria-sort={sort.key === key ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'none'}>
                  <button type="button" onClick={() => toggleSort(key)} className="inline-flex items-center gap-1">
                    {label}
                    {sort.key === key ? (
                      sort.direction === 'asc' ? <ChevronUp className="size-3.5" aria-hidden="true" /> : <ChevronDown className="size-3.5" aria-hidden="true" />
                    ) : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-3 py-6 text-stone-500">
                  No students match that filter.
                </td>
              </tr>
            ) : (
              visible.map((row) => (
                <tr key={row.name} className="border-t border-stone-200 dark:border-stone-800">
                  <th scope="row" className="px-3 py-2 font-medium text-stone-950 dark:text-stone-50">
                    {row.name}
                  </th>
                  <td className="px-3 py-2">{row.track}</td>
                  <td className="px-3 py-2">{row.status}</td>
                  <td className="px-3 py-2 font-mono text-xs">{row.score}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
