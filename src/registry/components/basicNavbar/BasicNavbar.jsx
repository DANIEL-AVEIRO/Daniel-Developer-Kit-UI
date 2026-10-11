const links = [
  { href: '#product', label: 'Product' },
  { href: '#docs', label: 'Docs' },
  { href: '#pricing', label: 'Pricing' },
]

const BasicNavbar = () => {
  return (
    <header className="rounded-lg border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <a href="#home" className="text-sm font-semibold text-stone-950 dark:text-stone-50">
          Northwind
        </a>
        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-stone-950 dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#start" className="rounded-md bg-teal-800 px-3 py-1.5 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
          Get started
        </a>
      </div>
    </header>
  )
}

export default BasicNavbar
