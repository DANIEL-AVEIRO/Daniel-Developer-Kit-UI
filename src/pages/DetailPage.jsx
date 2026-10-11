import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ComponentCard from '../components/catalog/ComponentCard.jsx'
import CopyButton from '../components/common/CopyButton.jsx'
import FavoriteButton from '../components/common/FavoriteButton.jsx'
import PreviewFrame from '../components/common/PreviewFrame.jsx'
import { useLibrary } from '../hooks/useLibrary.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { playgroundFor } from '../playground/catalog.js'
import { getCategory, getEntry, getRelated, pathForKind } from '../registry/registryIndex.js'
import { installCommand } from '../utils/formatSource.js'
import NotFoundPage from './NotFoundPage.jsx'

const DetailPage = ({ kind }) => {
  const { slug } = useParams()
  const entry = getEntry(kind, slug)
  const { collections, addToCollection, storageError } = useLibrary()
  const [collectionId, setCollectionId] = useState('')
  usePageTitle(entry?.name ?? 'Not found')

  if (!entry) return <NotFoundPage nested />

  const category = getCategory(entry.category)
  const related = getRelated(entry)
  const requiredDependencies = entry.dependencies.filter((item) => item.scope !== 'example')
  const exampleDependencies = entry.dependencies.filter((item) => item.scope === 'example')
  const command = installCommand(entry.dependencies)
  const catalogPath = `/${pathForKind(kind)}`
  const kindLabel = kind === 'component' ? 'Components' : kind === 'block' ? 'Blocks' : 'Templates'
  const playground = playgroundFor(entry)
  const selectedCollection = collections.some((collection) => collection.id === collectionId)
    ? collectionId
    : (collections[0]?.id ?? '')

  return (
    <article>
      <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              to={catalogPath}
              className="transition-colors hover:text-accent dark:hover:text-accent-soft"
            >
              {kindLabel}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5 text-indigo-300 dark:text-indigo-400/50" />
          </li>
          <li>
            <Link
              to={`${catalogPath}?category=${entry.category}`}
              className="transition-colors hover:text-accent dark:hover:text-accent-soft"
            >
              {category?.name}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5 text-indigo-300 dark:text-indigo-400/50" />
          </li>
          <li className="font-medium text-ink dark:text-stone-200">{entry.name}</li>
        </ol>
      </nav>

      <header className="mt-5 border-b border-stone-200/80 pb-6 dark:border-stone-800">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase dark:text-accent-soft">
              {category?.name}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-stone-50">
              {entry.name}
            </h1>
          </div>
          <FavoriteButton entry={entry} />
        </div>
        {entry.status !== 'ready' ? (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-950 dark:bg-amber-950 dark:text-amber-100">
            This entry is not production-ready.
          </p>
        ) : null}
        <p className="mt-2.5 max-w-3xl text-sm leading-6 text-stone-600 dark:text-stone-400">
          {entry.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-900 ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-200 dark:ring-indigo-400/20"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-6">
        <PreviewFrame key={entry.id} entry={entry} />
      </div>

      <section className="mt-6 rounded-xl border border-stone-200/90 bg-paper p-5 shadow-sm sm:p-6 dark:border-stone-800 dark:bg-paper-dark">
        <h2 className="text-base font-semibold tracking-tight text-ink dark:text-stone-50">
          Installation
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">{entry.setup}</p>
        {requiredDependencies.length === 0 ? (
          <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">
            No extra packages. React and Tailwind CSS are enough.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {requiredDependencies.map((dependency) => (
              <li key={dependency.name} className="text-sm text-stone-700 dark:text-stone-300">
                <span className="font-mono text-[13px]">{dependency.name}</span>
                <span className="text-stone-500"> — {dependency.reason}</span>
              </li>
            ))}
          </ul>
        )}
        {exampleDependencies.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {exampleDependencies.map((dependency) => (
              <li key={dependency.name} className="text-sm text-stone-700 dark:text-stone-300">
                <span className="font-mono text-[13px]">{dependency.name}</span>
                <span className="text-stone-500"> — usage example only. {dependency.reason}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {entry.sourceFiles?.length ? (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-ink dark:text-stone-100">Files</h3>
            <ul className="mt-2 space-y-1 text-sm text-stone-700 dark:text-stone-300">
              {entry.sourceFiles.map((filename) => (
                <li key={filename}>
                  <span className="font-mono text-[13px]">{filename}</span>
                  {entry.internalFiles?.includes(filename) ? (
                    <span className="text-stone-500"> — helper, keep beside the component</span>
                  ) : null}
                </li>
              ))}
            </ul>
            {entry.helperNote ? <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{entry.helperNote}</p> : null}
          </div>
        ) : null}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-ink dark:text-stone-100">Tailwind CSS</h3>
          <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">{entry.tailwind}</p>
        </div>
        {command ? (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <code className="overflow-x-auto rounded-xl bg-canvas px-3 py-2.5 font-mono text-[13px] text-ink ring-1 ring-stone-200/70 dark:bg-canvas-dark dark:text-stone-100 dark:ring-stone-800">
              {command}
            </code>
            <CopyButton text={command} label="Copy command" />
          </div>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton text={entry.importStatement} label="Copy import" />
          <CopyButton text={entry.usage} label={playground ? 'Copy default usage' : 'Copy usage'} />
        </div>
        {playground ? (
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
            Playground changes update <span className="font-mono text-[13px]">Usage.jsx</span> in Source code. Copy that file for the selected configuration.
          </p>
        ) : null}
        <form
          className="mt-5 flex flex-col gap-2 border-t border-stone-200/80 pt-4 sm:flex-row sm:items-end dark:border-stone-800"
          onSubmit={(event) => {
            event.preventDefault()
            if (selectedCollection) addToCollection(selectedCollection, entry)
          }}
        >
          <label htmlFor="add-collection" className="flex flex-1 flex-col gap-1 text-sm text-stone-700 dark:text-stone-300">
            Add to a collection
            <select
              id="add-collection"
              value={selectedCollection}
              onChange={(event) => setCollectionId(event.target.value)}
              className="h-10 rounded-xl border border-stone-300 bg-canvas px-2 text-sm text-ink dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100"
            >
              {collections.length === 0 ? <option value="">No collections yet</option> : null}
              {collections.map((collection) => (
                <option key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            disabled={!selectedCollection}
            className="inline-flex h-10 items-center rounded-xl bg-accent px-3 text-sm font-medium text-white disabled:opacity-50 hover:bg-indigo-800"
          >
            Add to collection
          </button>
        </form>
        <p className="mt-2 text-sm text-stone-500">
          Favorites and named collections are stored separately in this browser.{' '}
          <Link to="/favorites" className="underline-offset-2 hover:underline">
            Open favorites
          </Link>
        </p>
        {storageError ? <p className="mt-2 text-sm text-red-700 dark:text-red-300">{storageError}</p> : null}
      </section>

      <section className="mt-4 rounded-xl border border-stone-200/90 bg-paper p-5 shadow-sm sm:p-6 dark:border-stone-800 dark:bg-paper-dark">
        <h2 className="text-base font-semibold tracking-tight text-ink dark:text-stone-50">
          Responsive behavior
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
          {entry.responsiveNotes}
        </p>
      </section>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-stone-50">
            Related
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:gap-4">
            {related.map((item) => (
              <ComponentCard key={item.id} entry={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default DetailPage
