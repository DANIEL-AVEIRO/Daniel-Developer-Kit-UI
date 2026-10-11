import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Pagination = ({ pageCount = 8, initialPage = 1 }) => {
  const [page, setPage] = useState(initialPage)
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  function go(next) {
    setPage(Math.min(pageCount, Math.max(1, next)))
  }

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center gap-1">
      <button type="button" onClick={() => go(page - 1)} disabled={page === 1} className="inline-flex h-9 items-center gap-1 rounded-md px-2 text-sm disabled:opacity-40">
        <ChevronLeft className="size-4" aria-hidden="true" />
        Previous
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => go(number)}
          aria-current={number === page ? 'page' : undefined}
          className={`inline-flex size-9 items-center justify-center rounded-md text-sm ${number === page ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950' : 'hover:bg-stone-100 dark:hover:bg-stone-800'}`}
        >
          {number}
        </button>
      ))}
      <button type="button" onClick={() => go(page + 1)} disabled={page === pageCount} className="inline-flex h-9 items-center gap-1 rounded-md px-2 text-sm disabled:opacity-40">
        Next
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </nav>
  )
}

export default Pagination
