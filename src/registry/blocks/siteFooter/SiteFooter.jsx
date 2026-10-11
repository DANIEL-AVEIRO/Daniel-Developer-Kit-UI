const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Components', href: '#components' },
      { label: 'Templates', href: '#templates' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Getting started', href: '#docs' },
      { label: 'Accessibility', href: '#a11y' },
      { label: 'Licensing', href: '#license' },
    ],
  },
]

const SiteFooter = () => {
  return (
    <footer className="rounded-xl border border-stone-200 bg-white px-6 py-8 dark:border-stone-800 dark:bg-stone-900">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="text-sm font-semibold">DevKit UI</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-stone-600 dark:text-stone-400">
            A student-friendly registry of React components for Vite and Tailwind CSS.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-medium tracking-wide text-stone-500 uppercase">{column.title}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 border-t border-stone-200 pt-4 text-xs text-stone-500 dark:border-stone-800">© 2026 DevKit UI. Sample footer for coursework.</p>
    </footer>
  )
}

export default SiteFooter
