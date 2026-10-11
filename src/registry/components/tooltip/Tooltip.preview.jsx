import Tooltip from './Tooltip.jsx'

const TooltipPreview = () => {
  return (
    <div className="flex flex-wrap gap-3 py-8">
      <Tooltip label="Copies the current source file">
        <button type="button" className="rounded-md bg-stone-900 px-3 py-2 text-sm text-white dark:bg-stone-100 dark:text-stone-950">
          Copy
        </button>
      </Tooltip>
      <Tooltip label="Visible on hover and keyboard focus. Put a focusable control inside.">
        <button type="button" className="rounded-md border border-stone-300 px-3 py-2 text-sm dark:border-stone-700">
          More info
        </button>
      </Tooltip>
    </div>
  )
}

export default TooltipPreview
