const SwitchField = ({ id, label, description, checked, onChange, disabled = false }) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <label htmlFor={id} className="text-sm">
        <span className="font-medium text-stone-900 dark:text-stone-100">{label}</span>
        {description ? <span className="mt-0.5 block text-stone-500">{description}</span> : null}
      </label>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 disabled:opacity-50 ${checked ? 'bg-teal-800 dark:bg-teal-500' : 'bg-stone-300 dark:bg-stone-700'}`}
      >
        <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  )
}

export default SwitchField
