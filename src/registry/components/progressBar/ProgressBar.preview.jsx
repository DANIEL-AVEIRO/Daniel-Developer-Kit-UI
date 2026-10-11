import { useState } from 'react'
import ProgressBar from './ProgressBar.jsx'

const ProgressBarPreview = () => {
  const [value, setValue] = useState(42)

  return (
    <div className="max-w-md space-y-4">
      <ProgressBar value={value} label="Course progress" />
      <div className="flex gap-2">
        <button type="button" onClick={() => setValue((current) => Math.max(0, current - 10))} className="rounded-md border border-stone-300 px-3 py-1.5 text-sm dark:border-stone-700">
          Decrease
        </button>
        <button type="button" onClick={() => setValue((current) => Math.min(100, current + 10))} className="rounded-md bg-teal-800 px-3 py-1.5 text-sm text-white dark:bg-teal-600 dark:text-stone-950">
          Increase
        </button>
      </div>
    </div>
  )
}

export default ProgressBarPreview
