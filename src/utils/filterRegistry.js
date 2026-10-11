import { getCategory } from '../registry/registryIndex.js'

export function filterRegistry(items, { query = '', category = '', sort = '' } = {}) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean)

  const filtered = items.filter((item) => {
    if (category && item.category !== category) return false
    if (tokens.length === 0) return true

    const categoryName = getCategory(item.category)?.name ?? ''
    const haystack = [item.name, item.description, item.kind, item.category, categoryName, ...item.tags]
      .join(' ')
      .toLowerCase()

    return tokens.every((token) => haystack.includes(token))
  })

  if (sort === 'name') {
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sort === 'category') {
    return [...filtered].sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
  }

  return filtered
}
