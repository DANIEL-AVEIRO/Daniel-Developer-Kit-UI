import { useEffect, useState } from 'react'
import CodeViewer from '../components/common/CodeViewer.jsx'
import CopyButton from '../components/common/CopyButton.jsx'
import EmptyState from '../components/common/EmptyState.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { getEntriesByKind, getEntry } from '../registry/registryIndex.js'
import { formatSourceBundle } from '../utils/formatSource.js'

const blocks = getEntriesByKind('block')

const BuilderPage = () => {
  usePageTitle('Page builder')
  const [selectedSlug, setSelectedSlug] = useState(blocks[0]?.slug ?? '')
  const [placed, setPlaced] = useState([])
  const [exportFiles, setExportFiles] = useState(null)
  const [exportError, setExportError] = useState(false)

  function addBlock() {
    const entry = getEntry('block', selectedSlug)
    if (!entry) return
    setPlaced((current) => [...current, { key: `${entry.slug}-${Date.now()}`, slug: entry.slug }])
    setExportFiles(null)
  }

  function move(index, direction) {
    setPlaced((current) => {
      const next = [...current]
      const target = index + direction
      if (target < 0 || target >= next.length) return current
      const [item] = next.splice(index, 1)
      next.splice(target, 0, item)
      return next
    })
    setExportFiles(null)
  }

  function remove(key) {
    setPlaced((current) => current.filter((item) => item.key !== key))
    setExportFiles(null)
  }

  async function buildExport() {
    setExportError(false)
    try {
      const files = await exportBuiltPage(placed)
      setExportFiles(files)
    } catch {
      setExportFiles(null)
      setExportError(true)
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Builder"
        title="Page builder"
        description="Add registered blocks, reorder them, and copy the generated page beside each block file. The preview renders the same React components used in the catalog."
      />

      <form
        className="mt-6 flex flex-col gap-2 rounded-xl border border-stone-200/90 bg-paper p-4 shadow-sm sm:flex-row sm:items-end dark:border-stone-800 dark:bg-paper-dark"
        onSubmit={(event) => {
          event.preventDefault()
          addBlock()
        }}
      >
        <label htmlFor="block-picker" className="flex flex-1 flex-col gap-1 text-sm text-stone-700 dark:text-stone-300">
          Block
          <select
            id="block-picker"
            value={selectedSlug}
            onChange={(event) => setSelectedSlug(event.target.value)}
            className="h-10 rounded-xl border border-stone-300 bg-canvas px-2 text-sm text-ink dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100"
          >
            {blocks.map((block) => (
              <option key={block.id} value={block.slug}>
                {block.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="inline-flex h-10 items-center justify-center rounded-xl bg-accent px-3 text-sm font-medium text-white hover:bg-indigo-800">
          Add block
        </button>
      </form>

      {placed.length === 0 ? (
        <div className="mt-6">
          <EmptyState title="No blocks on this page" description="Choose a block and add it. The preview updates from the registered components." />
        </div>
      ) : (
        <ol className="mt-6 space-y-3">
          {placed.map((item, index) => {
            const entry = getEntry('block', item.slug)
            return (
              <li key={item.key} className="rounded-xl border border-stone-200/90 bg-paper p-3 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-ink dark:text-stone-50">{entry?.name ?? item.slug}</p>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => move(index, -1)} disabled={index === 0} className={actionClass}>
                      Move up
                    </button>
                    <button type="button" onClick={() => move(index, 1)} disabled={index === placed.length - 1} className={actionClass}>
                      Move down
                    </button>
                    <button type="button" onClick={() => remove(item.key)} className={actionClass}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      )}

      <section className="mt-8" aria-label="Combined page preview">
        <h2 className="text-lg font-semibold text-ink dark:text-stone-50">Preview</h2>
        <div className="mt-3 space-y-4 overflow-x-auto rounded-xl border border-stone-200/90 bg-canvas p-3 dark:border-stone-800 dark:bg-canvas-dark">
          {placed.length === 0 ? <p className="p-4 text-sm text-stone-500">The page preview appears after you add a block.</p> : null}
          {placed.map((item) => (
            <BlockPreview key={item.key} slug={item.slug} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={buildExport}
            disabled={placed.length === 0}
            className="inline-flex h-10 items-center rounded-xl bg-accent px-3 text-sm font-medium text-white hover:bg-indigo-800 disabled:opacity-50"
          >
            Generate source
          </button>
          {exportFiles ? <CopyButton text={formatSourceBundle(exportFiles)} label="Copy all files" /> : null}
        </div>
        {exportError ? <p className="mt-3 text-sm text-red-700 dark:text-red-300">The page source could not be prepared.</p> : null}
        {exportFiles ? (
          <div className="mt-4">
            <CodeViewer files={exportFiles} />
          </div>
        ) : null}
      </section>
    </div>
  )
}

const actionClass =
  'inline-flex h-8 items-center rounded-xl border border-stone-300 bg-canvas px-2 text-xs font-medium text-ink disabled:opacity-40 dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100'

function BlockPreview({ slug }) {
  const entry = getEntry('block', slug)
  const [Preview, setPreview] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!entry) return undefined
    let cancelled = false
    entry
      .loadPreview()
      .then((ComponentPreview) => {
        if (!cancelled) setPreview(() => ComponentPreview)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [entry])

  if (!entry || failed) return <p className="text-sm text-red-700">This block could not be previewed.</p>
  if (!Preview) return <p className="text-sm text-stone-500">Loading {entry.name}…</p>
  return <Preview />
}

async function exportBuiltPage(placed) {
  const unique = []
  const seen = new Set()
  placed.forEach((item) => {
    if (seen.has(item.slug)) return
    const entry = getEntry('block', item.slug)
    if (!entry?.exportName) return
    seen.add(item.slug)
    unique.push(entry)
  })

  const loaded = await Promise.all(unique.map((entry) => entry.loadFiles()))
  const imports = unique.map((entry) => `import ${entry.exportName} from './${entry.sourceFiles[0]}'`).join('\n')
  const markup = placed
    .map((item) => {
      const entry = getEntry('block', item.slug)
      return `      <${entry.exportName} />`
    })
    .join('\n')
  const page = `${imports}\n\nexport default function BuiltPage() {\n  return (\n    <div className="space-y-8">\n${markup}\n    </div>\n  )\n}\n`
  const files = [{ filename: 'BuiltPage.jsx', language: 'jsx', code: page }]

  unique.forEach((entry, index) => {
    loaded[index].forEach((file) => {
      if (!files.some((existing) => existing.filename === file.filename)) files.push(file)
    })
  })

  return files
}

export default BuilderPage
