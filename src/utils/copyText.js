export async function copyText(text) {
  if (typeof text !== 'string' || text.length === 0) {
    return { ok: false, reason: 'Nothing to copy' }
  }

  const errors = []

  if (!window.isSecureContext) {
    errors.push(new Error('Clipboard API requires HTTPS or localhost'))
  } else if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return { ok: true, reason: '' }
    } catch (error) {
      errors.push(error)
    }
  } else {
    errors.push(new Error('Clipboard API is unavailable'))
  }

  try {
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('aria-hidden', 'true')
    area.tabIndex = -1
    area.style.position = 'fixed'
    area.style.top = '0'
    area.style.left = '0'
    area.style.width = '1px'
    area.style.height = '1px'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.focus()
    area.select()
    area.setSelectionRange(0, area.value.length)
    const copied = document.execCommand('copy')
    document.body.removeChild(area)
    if (copied) return { ok: true, reason: '' }
    errors.push(new Error('document.execCommand("copy") returned false'))
  } catch (error) {
    errors.push(error)
  }

  const reason = errors
    .map((error) => error?.name && error?.message ? `${error.name}: ${error.message}` : error?.message || error?.name)
    .filter(Boolean)
    .join('; ')
  console.warn('Copy failed', errors)
  return { ok: false, reason: reason || 'Copy failed' }
}
