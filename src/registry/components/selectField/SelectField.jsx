import { ChevronDown } from 'lucide-react'

const SelectField = ({ id, label, hint, error, options = [], placeholder = 'Select an option', className = '', value, defaultValue, ...props }) => {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-stone-800 dark:text-stone-200">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`w-full appearance-none rounded-md border bg-white px-3 py-2 pr-9 text-sm text-stone-900 shadow-sm outline-none focus:ring-2 dark:bg-stone-900 dark:text-stone-100 ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-700' : 'border-stone-300 focus:border-teal-800 focus:ring-teal-800/15 dark:border-stone-700 dark:focus:border-teal-500'}`}
          {...(value !== undefined ? { value } : { defaultValue: defaultValue ?? '' })}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-stone-400" aria-hidden="true" />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700 dark:text-red-300">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-stone-500">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export default SelectField
