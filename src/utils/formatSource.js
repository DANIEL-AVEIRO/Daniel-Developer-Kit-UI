export function formatSourceBundle(files) {
  return files
    .map((file) => `/* ===== ${file.filename} ===== */\n${file.code.replace(/\s+$/, '')}\n`)
    .join('\n')
}

export function installCommand(dependencies = []) {
  const required = dependencies.filter((item) => item.scope !== 'example')
  if (required.length === 0) return ''
  return `npm install ${required.map((item) => item.name).join(' ')}`
}
