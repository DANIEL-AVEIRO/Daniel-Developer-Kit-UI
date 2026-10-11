import { categories, featuredSlugs } from '../data/categories.js'
import { blockEntries } from './blocks/entries.js'
import { componentEntries } from './components/entries.js'
import { installMetaFor } from './installMeta.js'
import { pageEntries } from './pages/entries.js'
import { templateEntries } from './templates/entries.js'

export { categories }

function withInstallMeta(entry) {
  return { ...entry, ...installMetaFor(entry) }
}

export const registry = [
  ...componentEntries,
  ...blockEntries,
  ...pageEntries,
  ...templateEntries,
].map(withInstallMeta)

const kindPath = {
  component: 'components',
  block: 'blocks',
  template: 'templates',
}

export function pathForKind(kind) {
  return kindPath[kind] ?? 'components'
}

export function getEntriesByKind(kind) {
  return registry.filter((item) => item.kind === kind)
}

export function getEntry(kind, slug) {
  return registry.find((item) => item.kind === kind && item.slug === slug) ?? null
}

export function getCategory(id) {
  return categories.find((category) => category.id === id) ?? null
}

export function getCategoriesForKind(kind) {
  return categories.filter((category) => category.kind === kind)
}

export function searchRegistry(query) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return []

  return registry.filter((item) => {
    const categoryName = getCategory(item.category)?.name ?? ''
    const haystack = [item.name, item.description, item.kind, item.category, categoryName, ...item.tags]
      .join(' ')
      .toLowerCase()
    return tokens.every((token) => haystack.includes(token))
  })
}

export function getRelated(entry) {
  if (!entry?.related?.length) return []
  return entry.related
    .map((slug) => registry.find((item) => item.slug === slug && item.kind === entry.kind) ?? registry.find((item) => item.slug === slug))
    .filter(Boolean)
}

export function getFeatured(group) {
  const slugs = featuredSlugs[group] ?? []
  return slugs.map((slug) => registry.find((item) => item.slug === slug)).filter(Boolean)
}
