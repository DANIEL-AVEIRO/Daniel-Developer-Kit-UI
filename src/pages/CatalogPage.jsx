import { useSearchParams } from 'react-router-dom'
import ComponentCard from '../components/catalog/ComponentCard.jsx'
import CategoryFilter from '../components/common/CategoryFilter.jsx'
import EmptyState from '../components/common/EmptyState.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import SearchInput from '../components/common/SearchInput.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'
import { getCategory, getEntriesByKind } from '../registry/registryIndex.js'
import { filterRegistry } from '../utils/filterRegistry.js'

const copy = {
  component: {
    title: 'Components',
    description: 'Buttons, forms, navigation, and data display. Open an item to preview it and copy its source.',
  },
  block: {
    title: 'Blocks',
    description: 'Page sections for marketing sites. Each block is a self-contained React component.',
  },
  template: {
    title: 'Templates',
    description: 'Complete pages and dashboard shells with local sample data and working controls.',
  },
}

const CatalogPage = ({ kind }) => {
  const details = copy[kind]
  usePageTitle(details.title)
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const category = params.get('category') ?? ''
  const sort = params.get('sort') ?? ''
  const items = filterRegistry(getEntriesByKind(kind), { query, category, sort })
  const categoryName = category ? getCategory(category)?.name : ''
  const filtersActive = Boolean(query || category || sort)

  function updateParams(next) {
    const parameters = new URLSearchParams(params)
    Object.entries(next).forEach(([key, value]) => {
      if (value) parameters.set(key, value)
      else parameters.delete(key)
    })
    setParams(parameters)
  }

  return (
    <div>
      <PageHeader eyebrow="Catalog" title={details.title} description={details.description} />

      <div className="mt-6 rounded-xl border border-stone-200/90 bg-paper p-4 shadow-sm dark:border-stone-800 dark:bg-paper-dark">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <SearchInput
              id={`${kind}-catalog-search`}
              mode="filter"
              label={`Search ${details.title.toLowerCase()}`}
              placeholder="Search by name, description, tag, or category"
              value={query}
              onChange={(value) => updateParams({ q: value })}
            />
          </div>
          <label htmlFor={`${kind}-sort`} className="flex flex-col gap-1 text-xs font-medium text-stone-600 dark:text-stone-400">
            Sort
            <select
              id={`${kind}-sort`}
              value={sort}
              onChange={(event) => updateParams({ sort: event.target.value })}
              className="h-10 rounded-xl border border-stone-300 bg-canvas px-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100"
            >
              <option value="">Catalog order</option>
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
          </label>
        </div>
        <div className="mt-4">
          <CategoryFilter kind={kind} value={category} onChange={(value) => updateParams({ category: value })} />
        </div>
        {filtersActive ? (
          <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Active filters">
            {query ? <FilterChip>Search: {query}</FilterChip> : null}
            {categoryName ? <FilterChip>Category: {categoryName}</FilterChip> : null}
            {sort ? <FilterChip>Sort: {sort === 'name' ? 'Name' : 'Category'}</FilterChip> : null}
            <button
              type="button"
              onClick={() => updateParams({ q: '', category: '', sort: '' })}
              className="text-sm font-medium text-accent underline-offset-2 hover:underline dark:text-accent-soft"
            >
              Clear all filters
            </button>
          </div>
        ) : null}
      </div>

      <p className="mt-5 text-sm text-stone-500 dark:text-stone-400">
        <span className="font-medium text-ink dark:text-stone-200">{items.length}</span>{' '}
        {items.length === 1 ? 'result' : 'results'}
      </p>

      {items.length === 0 ? (
        <div className="mt-4">
          <EmptyState
            title="No matches"
            description="Try another name, tag, or category. Search checks the name, description, tags, and category."
            action={
              <button
                type="button"
                onClick={() => updateParams({ q: '', category: '', sort: '' })}
                className="inline-flex h-9 items-center rounded-xl bg-accent px-3 text-sm font-medium text-white transition-colors hover:bg-indigo-800"
              >
                Clear filters
              </button>
            }
          />
        </div>
      ) : (
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:gap-4">
          {items.map((entry) => (
            <ComponentCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  )
}

const FilterChip = ({ children }) => {
  return (
    <span className="rounded-lg bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-900 dark:bg-indigo-500/15 dark:text-indigo-100">
      {children}
    </span>
  )
}

export default CatalogPage
