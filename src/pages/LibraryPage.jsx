import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { inspectRegistry } from '../registry/inspectRegistry.js'
import { pathForKind, registry } from '../registry/registryIndex.js'

const LibraryPage = () => {
  usePageTitle('Library')
  const rows = inspectRegistry(registry)
  const ready = rows.filter((row) => row.problems.length === 0)
  const attention = rows.filter((row) => row.problems.length > 0)

  return (
    <div>
      <PageHeader
        eyebrow="Registry"
        title="Library"
        description="Metadata check for every registry entry. This does not render previews, copy files, or call an API. An entry marked ready has the required fields. It has not been executed by this page."
      />

      <dl className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Entries" value={rows.length} />
        <Stat label="Metadata complete" value={ready.length} />
        <Stat label="Needs attention" value={attention.length} />
      </dl>

      <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200/90 bg-paper shadow-sm dark:border-stone-800 dark:bg-paper-dark">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="bg-canvas text-xs tracking-wide text-stone-500 uppercase dark:bg-canvas-dark">
            <tr>
              <th className="px-3 py-2 font-medium">Entry</th>
              <th className="px-3 py-2 font-medium">Kind</th>
              <th className="px-3 py-2 font-medium">Files</th>
              <th className="px-3 py-2 font-medium">Dependencies</th>
              <th className="px-3 py-2 font-medium">Metadata</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-stone-200 dark:border-stone-800">
                <td className="px-3 py-2">
                  <Link to={`/${pathForKind(row.kind)}/${row.slug}`} className="font-medium text-ink hover:text-accent hover:underline dark:text-stone-50 dark:hover:text-accent-soft">
                    {row.name}
                  </Link>
                </td>
                <td className="px-3 py-2 text-stone-500">{row.kind}</td>
                <td className="px-3 py-2 tabular-nums">{row.files}</td>
                <td className="px-3 py-2 tabular-nums">{row.dependencies}</td>
                <td className="px-3 py-2">
                  {row.problems.length === 0 ? (
                    <span className="text-emerald-800 dark:text-emerald-300">Complete</span>
                  ) : (
                    <span className="text-amber-800 dark:text-amber-200">{row.problems.join(', ')}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Stat = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-stone-200/90 bg-paper px-4 py-3 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
      <dt className="text-xs text-stone-500">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold tabular-nums text-accent dark:text-accent-soft">{value}</dd>
    </div>
  )
}

export default LibraryPage
