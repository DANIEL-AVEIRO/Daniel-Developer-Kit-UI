import { ChevronRight } from 'lucide-react'

const sampleItems = [
  { label: 'Library', href: '#library' },
  { label: 'Components', href: '#components' },
  { label: 'Buttons', href: '#buttons' },
]

const Breadcrumbs = ({ items = sampleItems }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 ? <ChevronRight className="size-3.5 text-stone-400" aria-hidden="true" /> : null}
              {last ? (
                <span aria-current="page" className="font-medium text-stone-950 dark:text-stone-50">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-100">
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
