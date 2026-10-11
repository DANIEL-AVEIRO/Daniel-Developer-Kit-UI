import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#work', label: 'Work' },
  { href: '#journal', label: 'Journal' },
]

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="rounded-lg border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-sm font-semibold">
          Fieldnote
        </a>
        <nav aria-label="Primary" className="hidden gap-4 text-sm text-stone-600 md:flex dark:text-stone-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-stone-950 dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#account" className="hidden rounded-md bg-stone-950 px-3 py-1.5 text-sm text-white md:inline-flex dark:bg-stone-100 dark:text-stone-950">
            Account
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md hover:bg-stone-100 md:hidden dark:hover:bg-stone-800"
            aria-expanded={open}
            aria-controls="responsive-nav-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="responsive-nav-menu" aria-label="Mobile" className="space-y-1 border-t border-stone-200 px-3 py-3 md:hidden dark:border-stone-800">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="block rounded-md px-2 py-2 text-sm hover:bg-stone-100 dark:hover:bg-stone-800" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

export default ResponsiveNavbar
