import { Inbox } from 'lucide-react'
import { useState } from 'react'
import EmptyState from './EmptyState.jsx'

const EmptyStatePreview = () => {
  const [added, setAdded] = useState(false)

  if (added) {
    return (
      <div className="rounded-lg border border-stone-200 px-4 py-6 text-sm dark:border-stone-800">
        <p className="font-medium text-stone-950 dark:text-stone-50">Field notes</p>
        <p className="mt-1 text-stone-600 dark:text-stone-400">One note was added in this preview only.</p>
        <button type="button" onClick={() => setAdded(false)} className="mt-3 text-sm font-medium text-teal-800 underline dark:text-teal-300">
          Reset
        </button>
      </div>
    )
  }

  return (
    <EmptyState
      icon={<Inbox className="size-5" aria-hidden="true" />}
      title="No notes yet"
      description="Notes you add will show up in this list. This preview keeps them in component state."
      action={
        <button type="button" onClick={() => setAdded(true)} className="rounded-md bg-teal-800 px-3 py-1.5 text-sm font-medium text-white dark:bg-teal-600 dark:text-stone-950">
          Add a note
        </button>
      }
    />
  )
}

export default EmptyStatePreview
