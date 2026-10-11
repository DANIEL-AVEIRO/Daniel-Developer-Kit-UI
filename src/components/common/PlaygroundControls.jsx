import { cx } from '../../utils/cx.js'

const controlClass =
  'h-9 rounded-xl border border-stone-300 bg-canvas px-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100'

const PlaygroundControls = ({ config, values, onChange, onReset }) => {
  return (
    <fieldset className="border-b border-stone-200/80 px-3 py-3 dark:border-stone-800">
      <legend className="px-1 text-xs font-semibold tracking-[0.12em] text-accent uppercase dark:text-accent-soft">Playground</legend>
      <div className="mt-2 flex flex-wrap items-end gap-3">
        {config.controls.map((control) => {
          const inputId = `playground-${control.key}`
          if (control.type === 'boolean') {
            return (
              <label key={control.key} htmlFor={inputId} className="inline-flex h-9 items-center gap-2 text-sm text-stone-800 dark:text-stone-200">
                <input
                  id={inputId}
                  type="checkbox"
                  checked={Boolean(values[control.key])}
                  onChange={(event) => onChange(control.key, event.target.checked)}
                  className="size-4 accent-indigo-700"
                />
                {control.label}
              </label>
            )
          }

          return (
            <label key={control.key} htmlFor={inputId} className="flex flex-col gap-1 text-xs font-medium text-stone-600 dark:text-stone-400">
              {control.label}
              <select
                id={inputId}
                value={values[control.key] ?? ''}
                onChange={(event) => onChange(control.key, event.target.value)}
                className={controlClass}
              >
                {control.options.map((option) => (
                  <option key={option.value || 'none'} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          )
        })}
        <button
          type="button"
          onClick={onReset}
          className={cx(
            'inline-flex h-9 items-center rounded-xl border border-stone-300 bg-canvas px-3 text-sm font-medium text-ink hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-stone-700 dark:bg-canvas-dark dark:text-stone-100 dark:hover:bg-indigo-500/10',
          )}
        >
          Reset
        </button>
      </div>
    </fieldset>
  )
}

export default PlaygroundControls
