import { useState } from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../components/common/EmptyState.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import { useLibrary } from '../hooks/useLibrary.js'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { getEntry, pathForKind } from '../registry/registryIndex.js'

const FavoritesPage = () => {
  usePageTitle('Favorites')
  const library = useLibrary()
  const [name, setName] = useState('')

  function onCreate(event) {
    event.preventDefault()
    if (library.createCollection(name)) setName('')
  }

  return (
    <div>
      <PageHeader
        eyebrow="Library"
        title="Favorites"
        description="Saved items stay in Favorites. Named collections are a separate list. Both are stored in this browser only."
      />

      {library.storageError ? (
        <p className="mt-4 text-sm text-red-700 dark:text-red-300" role="status">
          {library.storageError}
        </p>
      ) : null}

      <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-stone-50">Saved favorites</h2>
        {library.favorites.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              title="No favorites yet"
              description="Open a component, block, or template and choose Save."
              action={
                <Link to="/components" className="text-sm font-medium underline-offset-2 hover:underline">
                  Browse components
                </Link>
              }
            />
          </div>
        ) : (
          <ul className="mt-4 divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200/90 bg-paper px-4 shadow-sm dark:divide-stone-800 dark:border-stone-800 dark:bg-paper-dark">
            {library.favorites.map((item) => (
              <LibraryRow key={item.id} item={item} onRemove={() => library.removeFavorite(item.id)} />
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-ink dark:text-stone-50">Collections</h2>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          A collection is a named group. Adding an item here does not remove it from favorites.
        </p>
        <form onSubmit={onCreate} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <label htmlFor="collection-name" className="sr-only">
            Collection name
          </label>
          <input
            id="collection-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Collection name"
            className="h-10 w-full rounded-xl border border-stone-300 bg-paper px-3 text-sm text-ink dark:border-stone-700 dark:bg-paper-dark dark:text-stone-100"
          />
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-accent px-3 text-sm font-medium text-white hover:bg-indigo-800"
          >
            Create collection
          </button>
        </form>

        {library.collections.length === 0 ? (
          <p className="mt-4 text-sm text-stone-500">No collections yet.</p>
        ) : (
          <div className="mt-4 space-y-4">
            {library.collections.map((collection) => (
              <section key={collection.id} className="rounded-xl border border-stone-200/90 bg-paper p-4 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-ink dark:text-stone-50">{collection.name}</h3>
                  <button
                    type="button"
                    onClick={() => library.removeCollection(collection.id)}
                    className="text-sm text-stone-600 underline-offset-2 hover:underline dark:text-stone-300"
                  >
                    Delete collection
                  </button>
                </div>
                {collection.items.length === 0 ? (
                  <p className="mt-3 text-sm text-stone-500">This collection is empty. Add items from a detail page.</p>
                ) : (
                  <ul className="mt-3 divide-y divide-stone-200 dark:divide-stone-800">
                    {collection.items.map((item) => (
                      <LibraryRow
                        key={item.id}
                        item={item}
                        onRemove={() => library.removeFromCollection(collection.id, item.id)}
                      />
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

const LibraryRow = ({ item, onRemove }) => {
  const entry = getEntry(item.kind, item.slug)

  return (
    <li className="flex items-center justify-between gap-3 py-3">
      {entry ? (
        <Link to={`/${pathForKind(entry.kind)}/${entry.slug}`} className="min-w-0">
          <span className="block text-sm font-medium text-ink dark:text-stone-50">{entry.name}</span>
          <span className="text-xs tracking-wide text-stone-500 uppercase">{entry.kind}</span>
        </Link>
      ) : (
        <span className="text-sm text-stone-500">This saved item is no longer in the registry.</span>
      )}
      <button type="button" onClick={onRemove} className="shrink-0 text-sm font-medium text-stone-700 underline-offset-2 hover:underline dark:text-stone-300">
        Remove
      </button>
    </li>
  )
}

export default FavoritesPage
