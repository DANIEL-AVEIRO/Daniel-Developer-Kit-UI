const RadioGroup = ({ name, label, options = [], value, onChange }) => {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-stone-800 dark:text-stone-200">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-start gap-3 rounded-md border border-stone-200 px-3 py-2 text-sm has-checked:border-teal-800 dark:border-stone-800 dark:has-checked:border-teal-500">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
              className="mt-0.5 size-4 accent-teal-800"
            />
            <span>
              <span className="font-medium text-stone-900 dark:text-stone-100">{option.label}</span>
              {option.description ? <span className="mt-0.5 block text-stone-500">{option.description}</span> : null}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default RadioGroup
