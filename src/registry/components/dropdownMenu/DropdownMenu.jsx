import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const sampleItems = [
  { id: 'duplicate', label: 'Duplicate' },
  { id: 'rename', label: 'Rename' },
  { id: 'archive', label: 'Archive' },
]

const DropdownMenu = ({ label = 'Actions', items = sampleItems }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [choice, setChoice] = useState('')
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function onMenuKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => (index + 1) % items.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => (index - 1 + items.length) % items.length)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      choose(items[active])
    }
  }

  function choose(item) {
    setChoice(item.label)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 rounded-md border border-stone-300 bg-white px-3 text-sm dark:border-stone-700 dark:bg-stone-900"
      >
        {label}
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
      {open ? (
        <div role="menu" aria-label={label} onKeyDown={onMenuKeyDown} className="absolute z-10 mt-2 w-44 rounded-md border border-stone-200 bg-white p-1 shadow-sm dark:border-stone-700 dark:bg-stone-900">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              autoFocus={index === active}
              onMouseEnter={() => setActive(index)}
              onClick={() => choose(item)}
              className={`block w-full rounded px-2 py-1.5 text-left text-sm ${index === active ? 'bg-stone-100 dark:bg-stone-800' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400" aria-live="polite">
        {choice ? `Selected ${choice}` : 'Open the menu and choose an action.'}
      </p>
    </div>
  )
}

export default DropdownMenu
