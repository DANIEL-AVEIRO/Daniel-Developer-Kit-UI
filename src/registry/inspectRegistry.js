export function inspectRegistry(registry) {
  const seenIds = new Set()
  const seenSlugs = new Set()

  return registry.map((entry) => {
    const problems = []
    const key = `${entry.kind}:${entry.slug}`

    if (!entry.id) problems.push('Missing id')
    else if (seenIds.has(entry.id)) problems.push('Duplicate id')
    else seenIds.add(entry.id)

    if (!entry.slug) problems.push('Missing slug')
    else if (seenSlugs.has(key)) problems.push('Duplicate slug')
    else seenSlugs.add(key)

    if (!entry.name) problems.push('Missing name')
    if (!entry.description) problems.push('Missing description')
    if (!entry.category) problems.push('Missing category')
    if (!Array.isArray(entry.tags) || entry.tags.length === 0) problems.push('Missing tags')
    if (entry.status !== 'ready') problems.push(`Status is ${entry.status || 'unset'}`)
    if (!entry.importStatement) problems.push('Missing import')
    if (!entry.usage) problems.push('Missing usage example')
    if (!Array.isArray(entry.sourceFiles) || entry.sourceFiles.length === 0) problems.push('Missing source files')
    if (!Array.isArray(entry.dependencies)) problems.push('Missing dependency list')
    if (!entry.responsiveNotes) problems.push('Missing responsive notes')
    if (typeof entry.loadPreview !== 'function') problems.push('Missing preview loader')
    if (typeof entry.loadFiles !== 'function') problems.push('Missing file loader')

    return {
      id: entry.id,
      name: entry.name,
      kind: entry.kind,
      slug: entry.slug,
      status: entry.status || 'unset',
      files: entry.sourceFiles?.length ?? 0,
      dependencies: entry.dependencies?.length ?? 0,
      problems,
    }
  })
}
