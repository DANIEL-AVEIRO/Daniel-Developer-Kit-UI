import { GraduationCap, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { students } from './sampleData.js'

const StudentManagementDashboard = () => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(students[0].id)
  const filtered = useMemo(
    () => students.filter((student) => `${student.name} ${student.course}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  )
  const current = students.find((student) => student.id === selected) ?? filtered[0]

  return (
    <div className="min-h-[40rem] bg-stone-100 dark:bg-stone-950">
      <header className="border-b border-stone-200 bg-white px-4 py-3 dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <GraduationCap className="size-5 text-teal-800 dark:text-teal-400" aria-hidden="true" />
          <div>
            <h1 className="text-lg font-semibold">Student management</h1>
            <p className="text-xs text-stone-500">Roster data is local to this template</p>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-4 lg:grid-cols-[20rem_1fr]">
        <section className="rounded-xl border border-stone-200 bg-white p-3 dark:border-stone-800 dark:bg-stone-900">
          <label className="relative block">
            <span className="sr-only">Search students</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="h-10 w-full rounded-md border border-stone-300 pr-3 pl-9 text-sm dark:border-stone-700 dark:bg-stone-950" placeholder="Search roster" />
          </label>
          <ul className="mt-3 space-y-1">
            {filtered.map((student) => (
              <li key={student.id}>
                <button type="button" onClick={() => setSelected(student.id)} className={`w-full rounded-md px-2 py-2 text-left text-sm ${selected === student.id ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : 'hover:bg-stone-100 dark:hover:bg-stone-800'}`}>
                  <span className="block font-medium">{student.name}</span>
                  <span className="text-xs opacity-80">{student.course}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
        {current ? (
          <section className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
            <h2 className="text-xl font-semibold">{current.name}</h2>
            <p className="mt-1 text-sm text-stone-500">{current.course}</p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['Attendance', current.attendance],
                ['Grade', current.grade],
                ['Status', 'Enrolled'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-stone-50 p-3 dark:bg-stone-950">
                  <dt className="text-xs text-stone-500">{label}</dt>
                  <dd className="mt-1 text-lg font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-6 text-stone-600 dark:text-stone-400">
              Notes, attendance history, and submissions would appear here. This template keeps the interaction on the roster list.
            </p>
          </section>
        ) : null}
      </div>
    </div>
  )
}

export default StudentManagementDashboard
