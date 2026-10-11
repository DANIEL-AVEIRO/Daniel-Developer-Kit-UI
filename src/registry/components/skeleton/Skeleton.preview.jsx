import { useState } from 'react'
import Skeleton from './Skeleton.jsx'

const SkeletonPreview = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div className="max-w-md space-y-4">
      {loading ? (
        <div className="flex gap-3" aria-hidden="true">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        </div>
      ) : (
        <p className="text-sm text-stone-700 dark:text-stone-300">Amina Shah finished the layout review.</p>
      )}
      <button type="button" onClick={() => setLoading((value) => !value)} className="rounded-md border border-stone-300 px-3 py-1.5 text-sm dark:border-stone-700">
        {loading ? 'Show content' : 'Show skeleton'}
      </button>
    </div>
  )
}

export default SkeletonPreview
