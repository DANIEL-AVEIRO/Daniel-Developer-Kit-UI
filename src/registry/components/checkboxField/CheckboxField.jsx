const CheckboxField = ({ id, label, description, className = '', ...props }) => {
  return (
    <label htmlFor={id} className={`flex items-start gap-3 text-sm ${className}`}>
      <input id={id} type="checkbox" className="mt-0.5 size-4 accent-teal-800" {...props} />
      <span>
        <span className="font-medium text-stone-900 dark:text-stone-100">{label}</span>
        {description ? <span className="mt-0.5 block text-stone-500">{description}</span> : null}
      </span>
    </label>
  )
}

export default CheckboxField
